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
    document.title = `${C.name} · TPM & technical PM`;
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
  renderRoleList("#timeline-exp", C.experience, "Scope & impact");
  renderRoleList("#timeline-vol", C.volunteer, "Highlights");
  renderEducation();

  initNav();
})();
