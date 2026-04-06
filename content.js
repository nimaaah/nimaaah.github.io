/**
 * Portfolio content — edit text and image paths here.
 */
window.PORTFOLIO_CONTENT = {
  name: "Nima Hemati",
  title: "Technical & product-minded engineer",
  tagline:
    "Mechanical engineer with a systems lens—most engaged where roadmaps, stakeholders, and delivery meet hardware, software, and regulated product work.",
  headshot: {
    src: "assets/images/headshot.png",
    alt: "Professional headshot of Nima Hemati",
  },
  contact: {
    email: "nima.hemati@mail.mcgill.ca",
    phone: "+1 514-699-1401",
    github: "https://github.com/",
    links: [
      { label: "McGill aCADemy", href: "#volunteer" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nima-hemati-386040147" },
    ],
  },
  profile:
    "Graduate student and FRQNT scholar at McGill’s Department of Surgical and Interventional Sciences, focused on control schemes and interfaces for cardiovascular surgical robots. I care about soft robotics, systems design, UX that clinicians can actually use, and mechatronic systems that ship. I have years of cross-functional experience in requirements, Agile delivery, risk, and documentation in regulated settings, plus hands-on robotics and simulation. I translate engineering depth into priorities, timelines, and stakeholder communication. The work I gravitate toward aligns with technical project and program management and with technical product management—roles where owning outcomes matters as much as the technology.",

  skillGroups: [
    {
      title: "Delivery & leadership",
      items: [
        "Technical direction and subsystem ownership (e.g. vehicle program, lab software, founder-led ventures)",
        "Agile-style iteration with engineering teams; demos, backlog thinking, and integration milestones",
        "Stakeholder-ready communication: Excel/KPIs, presentations, and design reviews",
        "Risk, testing, and compliance mindset (ISO 13485 / IEC 62304 / ISO 14971 exposure)",
        "Fluent in English; fluent in French (spoken and professional contexts)",
      ],
    },
    {
      title: "Design & CAE",
      items: [
        "Siemens NX/CAE, Simcenter FEMAP, Amesim, Star-CCM+, HEEDS, Maya SATK",
        "SolidWorks, Ansys Workbench, Abaqus, MasterCAM, Autodesk Fusion (Fusion 360)",
        "Visualization: Unreal Engine for realistic renders and geometry (e.g. surgical equipment)",
        "Microsoft PowerPoint / Excel for specs, traceability, and program tracking",
      ],
    },
    {
      title: "Software & data",
      items: [
        "C++, C#, Python, MATLAB, Java, JavaScript — enough to work credibly with engineering teams",
        "AI / ML: PyTorch, TensorFlow, scikit-learn, OpenCV (proficient; used in research and shipped tooling)",
        "Git, Jira, SQL, Qt, Unity",
        "Linux, Ubuntu",
      ],
    },
  ],

  experience: [
    {
      id: "holoray",
      role: "Robotics Developer / Graduate Student",
      org: "HoloRay",
      location: "Westmount, QC",
      dates: "Nov 2025 – Present",
      summary:
        "Partner integrations: teleoperation robotics on HoloRay’s cloud communications stack, owned end to end—from working demo through conversations with external stakeholders.",
      bullets: [
        "Led co-development with another startup: a teleoperation platform integrated with HoloRay’s proprietary cloud communications platform.",
        "Owned integration, hardening, and rehearsal to ensure reliability under live scrutiny.",
        "Presented to mixed technical and business audiences on architecture, partner value, and the clinical and robotics narrative.",
      ],
      images: [],
    },
    {
      id: "taurus",
      role: "Robotics Developer",
      org: "Taurus Surgical Inc.",
      location: "Westmount, QC",
      dates: "Aug 2024 – Present",
      summary:
        "Hands-on robotics plus regulated product documentation—hardware–software integration and design history that has to stand up to scrutiny.",
      bullets: [
        "Designs and delivers mechanical test equipment and robotic adapters end-to-end (SolidWorks, DFM); uses resin and filament AM for prototypes that unblock integration when schedules slip.",
        "Threads system, mechanical, and software together for real-time C++/Qt robotic control—chases down bench-level failures before they become program risk.",
        "Contributes to RCA and CAPA on mechatronic systems—writes clearly so corrective and preventive actions stick",
        "Primary author of technical documentation under ISO 13485, IEC 62304, and ISO 14971—owns design history through reviews and toward release.",
      ],
      images: [
        // { src: "assets/images/taurus-1.jpg", caption: "Test fixture overview" },
      ],
    },
    {
      id: "myradio",
      role: "Founder",
      org: "MyRadio",
      location: "Montréal, QC",
      dates: "Sep 2025 – Present",
      summary:
        "Affordable, personalized physical prototypes from CT/MRI for patients, clinicians, educators, and businesses.",
      bullets: [
        "Founded MyRadio to turn imaging into something people can hold: low-cost, customized 3D-printed models from CT/MRI scans.",
        "Runs founder-led work end to end—product definition, customer conversations, and a manufacturing path suited to one-offs and small batches",
      ],
      images: [],
    },
    {
      id: "trimuh",
      role: "Research Assistant",
      org: "RI-MUHC SuPER Lab",
      location: "Montréal, QC",
      dates: "May 2023 – Present",
      summary:
        "Roughly 30–40% of time on coordination and integration across the lab; the remainder on hands-on technical work—simulation, modeling, ML/control, and conference-level communication of results.",
      bullets: [
        "Contributes to Agile delivery of real-time surgical simulation (C++, C#, Qt, Unity, Linux): coordinates integration milestones and cross-discipline alignment with the lab team, while spending most of my time on deep technical work in the stack.",
        "Iterates physical tool concepts in SolidWorks and backs design decisions with structural contact analysis (Ansys).",
        "Reduces technical risk on flexible-robot behavior using MATLAB and Python/PyTorch for dynamics and control—not only models that sit in a folder.",
        "Takes results outside the lab (IROS, HSMR) with stakeholder-grade storytelling on complex systems.",
      ],
      images: [],
    },
    {
      id: "baja",
      role: "Technical Director / Transmission Lead",
      org: "McGill Baja Racing",
      location: "Montréal, QC",
      dates: "Sep 2019 – May 2023",
      summary:
        "Program-level technical leadership for a ~20–25-person team with a program budget of roughly $100k per year: requirements flow-down, verification planning, and cross-subsystem integration for a competition vehicle.",
      bullets: [
        "Progressed from Body Panels subsystem lead to Transmission subsystem lead to Technical Director / Transmission lead—growing scope from one assembly to vehicle-wide technical direction under a ~$100k annual budget.",
        "Drove system-level planning with KPIs, Excel, and MATLAB—translated competition goals into subsystem requirements and made trade-offs visible across ~20–25 active members.",
        "Owned transmission structural integrity (Siemens NX/CAE)—analysis-backed decisions on a safety-critical load path.",
        "Standardized chassis CAE (modal analysis, 1-D connections) so subsystem teams were not comparing apples to oranges.",
        "Ran sensor-based verification (strain, acceleration, load) to provide hard evidence for integration gates before competition.",
        "Shipped manufacturing-ready packages: controlled drawings and MasterCAM G-code for CNC milling and lathing.",
      ],
      images: [],
    },
    {
      id: "maya",
      role: "Systems Engineering Intern",
      org: "Maya HTT",
      location: "Montréal, QC",
      dates: "May 2022 – Aug 2022",
      summary:
        "Client-spec simulations, presales storytelling, and high-end visuals—connecting Amesim models to what buyers actually care about.",
      bullets: [
        "Built system-level Simcenter Amesim simulations from client specifications and requirements—not generic demos, but tailored to what clients requested.",
        "Produced marketing documentation and media for Simcenter Amesim and Maya HTT’s SAToolkit, making technical capability legible to non-experts.",
        "Created realistic renders and geometry for surgical equipment using Siemens NX and Unreal Engine.",
        "Ran design-space optimizations with HEEDS under real constraints, tightening system simulation results for client-facing projects.",
      ],
      images: [],
    },
    {
      id: "martinrea",
      role: "Quality Assurance Intern",
      org: "Martinrea International Inc.",
      location: "Tillsonburg, ON",
      dates: "May 2021 – Aug 2021",
      summary:
        "Plant-scale traceability, downtime insight, and a small R&D-built web/ML stack that stayed in production.",
      bullets: [
        "Trained ML models for quality assurance and inventory (TensorFlow, OpenCV, SQL, Raspberry Pi)—the same stack addressed two operational problems.",
        "Shipped a production-style web client (Flask, HTML, CSS, AJAX) backed by a SQL Server database—live inventory augmentation, not a slide-deck prototype.",
        "Designed and 3D-printed mechanical hardware for tracking and produced drawings where the plant needed controlled documentation.",
        "Supported allocation and traceability for ~$48M in tooling tags plus invoicing workflows—Excel discipline when stakes were audit-level.",
        "Ran downtime studies using HMI and PLC tag data, turning shop-floor signals into actions staff could take.",
      ],
      images: [],
    },
  ],

  volunteer: [
    {
      id: "academy",
      role: "Founder / President",
      org: "McGill aCADemy",
      location: "Montréal, QC",
      dates: "Aug 2020 – May 2022",
      bullets: [
        "Founded and ran McGill aCADemy—peer mentorship and structured workshops (SolidWorks, Siemens NX)",
      ],
      images: [],
    },
    {
      id: "mentor",
      role: "Team Mentor",
      org: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2020 – May 2021",
      bullets: [
        "Served as a TEAM mentor for CHEM 110 and CHEM 120—general chemistry fundamentals, valence theory, coordination chemistry, periodic trends, kinematics, and equilibrium.",
        "Facilitated online discussions and ran high-volume group tutoring sessions.",
      ],
      images: [],
    },
    {
      id: "ta",
      role: "Teaching Assistant",
      org: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2020 – Dec 2020",
      bullets: [
        "Served as a TA for MATH 262 (Intermediate Calculus)—office hours, weekly workshops, and problem-set solutions for teaching staff.",
      ],
      images: [],
    },
  ],

  education: [
    {
      degree: "Master of Science, Surgical Robotics",
      school: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2024 – May 2026",
      highlights: [
        "GPA: 4.00/4.00",
        "Thesis: Robust, optimal control of tendon-driven robotic catheter dynamics",
        "Graduate Excellence award; FRQNT Scholar",
      ],
      images: [],
    },
    {
      degree: "B.Eng. (Honours), Mechanical Engineering",
      school: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2019 – May 2024",
      highlights: [
        "GPA: 3.73/4.00",
        "Minor in software engineering",
        "Thesis: Trajectory planning and control for a hydraulic log-loading manipulator",
        "Activities: McGill Baja Racing (2019–2023), McGill aCADemy (2020–2022), intramural sports",
        "Class of 1983 scholarship; Dean’s Honor List; 3× TEAM Mentorship award",
      ],
      images: [],
    },
  ],

  pdfCvPath: "Nima_Hemati_CV.pdf",
};
