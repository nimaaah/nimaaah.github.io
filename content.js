/**
 * Portfolio content — edit text and image paths here.
 */
window.PORTFOLIO_CONTENT = {
  name: "Nima Hemati",
  title: "Technical & product-minded engineer",
  tagline:
    "Targeting technical program / project management and product management roles where deep systems understanding meets roadmaps, stakeholders, and delivery.",
  headshot: {
    src: "assets/images/headshot.png",
    alt: "Professional headshot of Nima Hemati",
  },
  contact: {
    email: "nima.hemati@mail.mcgill.ca",
    phone: "+1 514-699-1401",
    github: "https://github.com/",
    links: [{ label: "McGill aCADemy", href: "#volunteer" }],
  },
  profile:
    "Mechanical engineer (M.Sc. in progress) with a software minor and years of leading cross-functional work: requirements, Agile delivery, risk and documentation in regulated environments, and hands-on robotics and simulation. I translate engineering depth into clear priorities, timelines, and stakeholder communication. Seeking technical project/program management or technical product management where ownership of outcomes matters as much as the tech stack.",

  skillGroups: [
    {
      title: "Delivery & leadership",
      items: [
        "Technical direction and subsystem ownership (e.g. vehicle program, lab software)",
        "Agile-style iteration with engineering teams; demos, backlog thinking, and integration milestones",
        "Stakeholder-ready communication: Excel/KPIs, presentations, and design reviews",
        "Risk, testing, and compliance mindset (ISO 13485 / IEC 62304 / ISO 14971 exposure)",
        "English fluent; French fluent (spoken and professional context)",
      ],
    },
    {
      title: "Design & CAE",
      items: [
        "Siemens NX/CAE, Simcenter FEMAP, Amesim, Star-CCM+, HEEDS, Maya SATK",
        "SolidWorks, Ansys Workbench, Abaqus, MasterCAM, Fusion 360",
        "Microsoft PowerPoint / Excel for specs, traceability, and program tracking",
      ],
    },
    {
      title: "Software & data",
      items: [
        "C++, C#, Python, MATLAB, Java, JavaScript — enough to work credibly with engineering teams",
        "Git, Jira, PyTorch, TensorFlow, OpenCV, SQL, Qt, Unity",
        "Linux, Ubuntu",
      ],
    },
  ],

  experience: [
    {
      id: "taurus",
      role: "Robotics Developer",
      org: "Taurus Surgical Inc.",
      location: "Westmount, QC",
      dates: "Aug 2024 – Present",
      summary:
        "Hands-on robotics plus regulated product documentation — strong parallel to TPM owning hardware–software interfaces and design history.",
      bullets: [
        "Designs mechanical testing equipment and robotic adapters (SolidWorks, DFM); prototypes with resin and filament AM",
        "Integrates system, mechanical, and software for real-time C++/Qt robotic control",
        "RCA and CAPA on mechatronic systems",
        "Technical documentation aligned with ISO 13485, IEC 62304, ISO 14971",
      ],
      images: [
        // { src: "assets/images/taurus-1.jpg", caption: "Test fixture overview" },
      ],
    },
    {
      id: "trimuh",
      role: "Research Assistant",
      org: "RI-MUHC Super Lab",
      location: "Montréal, QC",
      dates: "May 2023 – Present",
      summary:
        "Leads slices of a complex simulation product: tools, analysis, ML/control, and conference-level communication of results.",
      bullets: [
        "Agile development of real-time simulation (C++, C#, Qt, Unity, Linux)",
        "Surgical tool design (SolidWorks) and structural contact analysis (Ansys)",
        "Analytical (MATLAB) and AI-based (Python, PyTorch) dynamics/control for flexible robots",
        "Conference presentations (IROS, HSMR)",
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
        "Program-level technical leadership: requirements flow-down, verification planning, and cross-subsystem integration for a competition vehicle.",
      bullets: [
        "System-level development with KPIs, Excel, MATLAB for subsystem requirements",
        "Structural analysis of transmission (Siemens NX/CAE)",
        "Modal analysis of chassis; accurate 1-D connections for structural models",
        "Strain gauges, accelerometers, load cells for unit/integration testing",
        "Technical drawings; G-code (MasterCAM) for CNC milling/lathing",
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
        "Customer-facing technical work: models, analyses, and portfolio storytelling for engineering software.",
      bullets: [
        "Random and sinusoidal analyses (Simcenter FEMAP, Maya SATK)",
        "System-level Amesim models: powertrain and thermal",
        "Client-facing PowerPoint on Simcenter portfolio",
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
        "Traceability at scale plus building internal tools — data, process, and a shipped web/ML prototype.",
      bullets: [
        "Excel workflows for ~$48M tooling tag traceability",
        "Camera mounts and tracking hardware (SolidWorks); deformation analysis",
        "Web client (HTML, JS, Flask), ML (Python, TensorFlow, OpenCV, SQL) on Raspberry Pi",
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
        "Founded CAD tutoring; mentorship and workshops (SolidWorks, Siemens NX)",
      ],
      images: [],
    },
    {
      id: "mentor",
      role: "Team Mentor",
      org: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2020 – May 2021",
      bullets: ["General Chemistry 1 & 2 discussion board support"],
      images: [],
    },
    {
      id: "ta",
      role: "Teaching Assistant",
      org: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2020 – Dec 2020",
      bullets: ["Intermediate Calculus support; planned weekly workshops"],
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
