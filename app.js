(function () {
  const C = window.PORTFOLIO_CONTENT;
  if (!C) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function photosBlock(images) {
    if (!images || !images.length) return "";
    return `
      <div class="inline-gallery">
        <h4 class="inline-gallery-title">Photos</h4>
        <div class="photo-strip">
          ${images
            .map(
              (im) => `
            <figure>
              <img src="${esc(im.src)}" alt="${esc(im.caption || "")}" loading="lazy" width="400" height="300" />
              ${im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""}
            </figure>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function isVideoSrc(src) {
    return /\.(mov|mp4|webm|ogv)(\?.*)?$/i.test(src || "");
  }

  function tokenize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4);
  }

  function truncateText(value, max = 170) {
    if (!value || value.length <= max) return value || "";
    return `${value.slice(0, max - 1).trimEnd()}…`;
  }

  function buildBulletEvidence() {
    const out = [];
    (C.experience || []).forEach((role) => {
      (role.bullets || []).forEach((text) => {
        out.push({
          text,
          source: `${role.role}, ${role.org}`,
          tokens: tokenize(text),
        });
      });
    });
    (C.skillGroups || []).forEach((group) => {
      (group.items || []).forEach((text) => {
        out.push({
          text,
          source: group.title,
          tokens: tokenize(text),
        });
      });
    });
    return out;
  }

  function sectionKeywordBoost(sectionId, text) {
    const t = (text || "").toLowerCase();
    if (sectionId === "mechanical-design") {
      return /(robot|hardware|mechanical|design|verification|control|simulation|prototype|integration)/.test(t)
        ? 2
        : 0;
    }
    if (sectionId === "product-management") {
      return /(agile|delivery|roadmap|requirements|program|milestone|product|risk|coordina|stakeholder)/.test(t)
        ? 2
        : 0;
    }
    if (sectionId === "stakeholder-communication") {
      return /(present|story|stakeholder|clinical|invest|audience|communication|demo|conference|business)/.test(t)
        ? 2
        : 0;
    }
    if (sectionId === "software-design") {
      return /(software|code|ui|interface|python|c\+\+|control|simulation|qt|unity|model|algorithm|data)/.test(t)
        ? 2
        : 0;
    }
    return 0;
  }

  function inferMediaCaption(group, item, evidencePool) {
    const basis = [group.id, group.title, group.label, item.title, item.alt, item.src].join(" ");
    const mediaTokens = tokenize(basis);
    let best = null;
    let bestScore = -1;
    for (const ev of evidencePool) {
      const overlap = ev.tokens.reduce((acc, t) => acc + (mediaTokens.includes(t) ? 1 : 0), 0);
      const score = overlap + sectionKeywordBoost(group.id, ev.text);
      if (score > bestScore) {
        best = ev;
        bestScore = score;
      }
    }
    if (!best) return { caption: "", source: "" };
    return {
      caption: truncateText(best.text, 180),
      source: best.source,
    };
  }

  function mediaStageHtml(item, resolvedCaption) {
    const cap = resolvedCaption || item.caption || "";
    const alt = item.alt != null ? item.alt : cap.slice(0, 120) || "Portfolio media";
    const src = item.src || "";
    if (isVideoSrc(src) || item.type === "video") {
      return `<video class="portfolio-stage-media" src="${esc(src)}" controls playsinline preload="metadata" aria-label="${esc(
        alt
      )}"></video>`;
    }
    return `<img class="portfolio-stage-media" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" />`;
  }

  function mediaTileHtml(item, idx, selected, resolvedCaption) {
    const cap = resolvedCaption || "";
    const alt = item.alt != null ? item.alt : cap.slice(0, 120) || "Portfolio media";
    const src = item.src || "";
    const isVideo = isVideoSrc(src) || item.type === "video";
    return `
      <button type="button" class="portfolio-tile${selected ? " is-active" : ""}" data-media-index="${idx}" aria-label="${esc(
      alt
    )}">
        <span class="portfolio-tile-media-wrap">
          ${
            isVideo
              ? `<video src="${esc(src)}" preload="metadata" playsinline muted aria-hidden="true"></video><span class="portfolio-play-badge">Video</span>`
              : `<img src="${esc(src)}" alt="" loading="lazy" decoding="async" />`
          }
        </span>
        ${cap ? `<span class="portfolio-tile-caption">${esc(cap)}</span>` : ""}
      </button>`;
  }

  function renderPortfolio() {
    const section = $("#portfolio");
    const shell = $("#portfolio-shell");
    const filtersEl = $("#portfolio-filters");
    const featureEl = $("#portfolio-feature");
    const gridEl = $("#portfolio-grid");
    const headingEl = $("#portfolio-heading");
    const introEl = $("#portfolio-intro");
    if (!section || !shell || !filtersEl || !featureEl || !gridEl || !headingEl) return;

    const P = C.portfolio;
    const groups = P && Array.isArray(P.sections) ? P.sections : [];
    const validGroups = groups.filter((g) => g && g.id && Array.isArray(g.items) && g.items.some((i) => i && i.src));

    if (!validGroups.length) {
      section.hidden = true;
      filtersEl.innerHTML = "";
      featureEl.innerHTML = "";
      gridEl.innerHTML = "";
      return;
    }
    section.hidden = false;
    headingEl.textContent = (P && P.heading) || "Portfolio";
    const intro = (P && P.intro) || "";
    if (introEl) {
      if (intro) {
        introEl.textContent = intro;
        introEl.hidden = false;
      } else {
        introEl.textContent = "";
        introEl.hidden = true;
      }
    }
    let activeGroup = validGroups[0];
    let activeItem = activeGroup.items.find((it) => it && it.src) || null;
    const evidencePool = buildBulletEvidence();
    let autoRotateTimer = null;
    let autoRotatePaused = false;
    let stageSwitchTimer = null;

    function activeItems() {
      return activeGroup.items.filter((it) => it && it.src);
    }

    function captionMeta(item) {
      return inferMediaCaption(activeGroup, item, evidencePool);
    }

    function renderStage() {
      if (!activeItem) {
        featureEl.innerHTML = "";
        return;
      }
      const groupTitle = activeGroup.title || "";
      const why = activeGroup.why || "";
      const meta = captionMeta(activeItem);
      featureEl.innerHTML = `
        <div class="portfolio-stage-wrap">${mediaStageHtml(activeItem, meta.caption)}</div>
        <div class="portfolio-stage-copy">
          ${groupTitle ? `<p class="portfolio-stage-kicker">${esc(groupTitle)}</p>` : ""}
          ${activeItem.title ? `<h3 class="portfolio-stage-title">${esc(activeItem.title)}</h3>` : ""}
          ${meta.caption ? `<p class="portfolio-stage-text">${esc(meta.caption)}</p>` : ""}
          ${meta.source ? `<p class="portfolio-stage-source">Evidence: ${esc(meta.source)}</p>` : ""}
          ${why ? `<p class="portfolio-stage-why">${esc(why)}</p>` : ""}
        </div>`;

      const stageVideo = $(".portfolio-stage-media", featureEl);
      if (stageVideo && stageVideo.tagName === "VIDEO") {
        stageVideo.autoplay = true;
        stageVideo.muted = true;
        stageVideo.playsInline = true;
        const tryPlay = stageVideo.play();
        if (tryPlay && typeof tryPlay.catch === "function") {
          tryPlay.catch(() => {});
        }
      }
    }

    function switchActiveItem(nextItem) {
      if (!nextItem || nextItem === activeItem) return;
      if (stageSwitchTimer) {
        window.clearTimeout(stageSwitchTimer);
        stageSwitchTimer = null;
      }
      featureEl.classList.add("is-switching");
      stageSwitchTimer = window.setTimeout(() => {
        activeItem = nextItem;
        renderStage();
        renderGrid();
        featureEl.classList.remove("is-switching");
      }, 160);
    }

    function renderGrid() {
      const items = activeItems();
      gridEl.innerHTML = items
        .map((item, idx) => {
          const meta = captionMeta(item);
          return mediaTileHtml(item, idx, item === activeItem, meta.caption);
        })
        .join("");
      $$("[data-media-index]", gridEl).forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-media-index"));
          const picked = items[idx];
          if (!picked) return;
          switchActiveItem(picked);
          restartAutoRotate();
        });
      });
    }

    function renderFilters() {
      filtersEl.innerHTML = validGroups
        .map(
          (g, idx) =>
            `<button type="button" class="portfolio-filter${g.id === activeGroup.id ? " is-active" : ""}" role="tab" aria-selected="${
              g.id === activeGroup.id ? "true" : "false"
            }" data-group-index="${idx}">${esc(g.label || g.title || g.id)}</button>`
        )
        .join("");
      $$("[data-group-index]", filtersEl).forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-group-index"));
          const group = validGroups[idx];
          if (!group) return;
          activeGroup = group;
          activeItem = group.items.find((it) => it && it.src) || null;
          restartAutoRotate();
          renderFilters();
          renderStage();
          renderGrid();
        });
      });
    }

    function rotateToNext() {
      const items = activeItems();
      if (!items.length || !activeItem) return;
      const idx = items.indexOf(activeItem);
      const next = items[(idx + 1) % items.length];
      if (!next) return;
      switchActiveItem(next);
    }

    function stopAutoRotate() {
      if (autoRotateTimer) {
        window.clearInterval(autoRotateTimer);
        autoRotateTimer = null;
      }
    }

    function startAutoRotate() {
      stopAutoRotate();
      autoRotateTimer = window.setInterval(() => {
        if (autoRotatePaused || document.hidden) return;
        const stageVideo = $(".portfolio-stage-media", featureEl);
        if (stageVideo && stageVideo.tagName === "VIDEO" && !stageVideo.ended) return;
        rotateToNext();
      }, 7000);
    }

    function restartAutoRotate() {
      startAutoRotate();
    }

    shell.hidden = false;
    renderFilters();
    renderStage();
    renderGrid();
    startAutoRotate();

    shell.addEventListener("mouseenter", () => {
      autoRotatePaused = true;
    });
    shell.addEventListener("mouseleave", () => {
      autoRotatePaused = false;
    });
    shell.addEventListener("focusin", () => {
      autoRotatePaused = true;
    });
    shell.addEventListener("focusout", () => {
      autoRotatePaused = false;
    });
  }

  function renderSkills() {
    const grid = $("#skill-grid");
    if (!grid || !C.skillGroups) return;
    grid.innerHTML = C.skillGroups
      .map(
        (g) => `
      <article class="skill-card">
        <h3>${esc(g.title)}</h3>
        <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </article>`
      )
      .join("");
  }

  function renderRoleList(containerId, items, bulletLabel) {
    const el = $(containerId);
    if (!el || !items) return;
    el.innerHTML = items
      .map((item) => {
        const meta = [item.location, item.dates].filter(Boolean).join(" · ");
        const summary = item.summary || "";
        const bullets = item.bullets || item.highlights || [];
        const label = bulletLabel || "Highlights";
        return `
        <article class="role-card">
          <header class="role-card-head">
            <h3 class="role-card-title">${esc(item.role)}</h3>
            <p class="role-card-org">${esc(item.org)}</p>
            <p class="role-card-meta">${esc(meta)}</p>
          </header>
          ${summary ? `<p class="role-card-summary">${esc(summary)}</p>` : ""}
          <h4 class="role-card-list-title">${esc(label)}</h4>
          <ul class="role-card-list">${bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          ${photosBlock(item.images)}
        </article>`;
      })
      .join("");
  }

  function renderEducation() {
    const eduEl = $("#education-blocks");
    if (!eduEl || !C.education) return;
    eduEl.innerHTML = C.education
      .map((ed) => {
        const meta = [ed.location, ed.dates].filter(Boolean).join(" · ");
        return `
        <article class="role-card edu-card">
          <header class="role-card-head">
            <h3 class="role-card-title">${esc(ed.degree)}</h3>
            <p class="role-card-org">${esc(ed.school)}</p>
            <p class="role-card-meta">${esc(meta)}</p>
          </header>
          <h4 class="role-card-list-title">Highlights</h4>
          <ul class="role-card-list">${(ed.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          ${photosBlock(ed.images)}
        </article>`;
      })
      .join("");
  }

  function initNav() {
    const toggle = $("#nav-toggle");
    const wrap = $("#nav-list-wrap");
    if (toggle && wrap) {
      toggle.addEventListener("click", () => {
        const open = wrap.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    const sections = $$("main section[id]");
    const links = $$('.nav-list a[href^="#"]');

    function setCurrent() {
      const y = window.scrollY + 120;
      let current = "";
      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec.id;
      }
      links.forEach((a) => {
        const id = a.getAttribute("href").slice(1);
        a.setAttribute("aria-current", id === current ? "true" : "false");
      });
    }

    let scrollTicking = false;
    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          setCurrent();
          scrollTicking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    setCurrent();

    links.forEach((a) => {
      a.addEventListener("click", () => {
        if (wrap) {
          wrap.classList.remove("is-open");
          toggle?.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function fillHero() {
    document.title = `${C.name} — Portfolio`;
    $("#hero-name").textContent = C.name;
    $("#hero-title").textContent = C.title;
    $("#hero-tagline").textContent = C.tagline;
    $("#profile-text").textContent = C.profile;

    const img = $("#headshot");
    if (img && C.headshot) {
      img.src = C.headshot.src;
      img.alt = C.headshot.alt || "";
    }

    const chips = $("#contact-chips");
    if (chips && C.contact) {
      const parts = [];
      if (C.contact.email) {
        parts.push(
          `<span class="chip"><a href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a></span>`
        );
      }
      if (C.contact.phone) {
        const tel = C.contact.phone.replace(/\s/g, "");
        parts.push(`<span class="chip"><a href="tel:${esc(tel)}">${esc(C.contact.phone)}</a></span>`);
      }
      if (C.contact.github) {
        parts.push(
          `<span class="chip"><a href="${esc(C.contact.github)}" target="_blank" rel="noopener">GitHub</a></span>`
        );
      }
      (C.contact.links || []).forEach((l) => {
        parts.push(`<span class="chip"><a href="${esc(l.href)}">${esc(l.label)}</a></span>`);
      });
      chips.innerHTML = parts.join("");
    }

    const pdf = $("#pdf-link");
    if (pdf && C.pdfCvPath) {
      pdf.href = C.pdfCvPath;
    }
  }

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  fillHero();
  renderSkills();
  renderPortfolio();
  renderRoleList("#timeline-exp", C.experience, "Scope & impact");
  renderRoleList("#timeline-vol", C.volunteer, "Highlights");
  renderEducation();

  initNav();
})();
