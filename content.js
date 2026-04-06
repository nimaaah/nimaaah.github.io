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
    github: "https://github.com/",
    links: [{ label: "McGill aCADemy", href: "#volunteer" }],
  },
  profile:
    "Mechanical engineer (M.Sc. in progress) with a software minor and years of leading cross-functional work: requirements, Agile delivery, risk and documentation in regulated environments, and hands-on robotics and simulation. I translate engineering depth into clear priorities, timelines, and stakeholder communication. The work I gravitate toward aligns with technical project and program management and with technical product management—roles where owning outcomes matters as much as the technology itself.",

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
        "SolidWorks, Ansys Workbench, Abaqus, MasterCAM, Autodesk Fusion (Fusion 360)",
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
      id: "taurus",
      role: "Robotics Developer",
      org: "Taurus Surgical Inc.",
      location: "Westmount, QC",
      dates: "Aug 2024 – Present",
      summary:
        "Hands-on robotics plus regulated product documentation—hardware–software integration and design history that has to stand up to scrutiny.",
      bullets: [
        "Delivers mechanical test equipment and robotic adapters end-to-end (SolidWorks, DFM); uses resin and filament AM for quick-turn prototypes that unblock integration",
        "Coordinates system, mechanical, and software workstreams for real-time C++/Qt robotic control—closing gaps between disciplines on the bench",
        "Contributes to RCA and CAPA on mechatronic systems—clear write-ups and follow-through so corrective and preventive actions stick",
        "Primary author of technical documentation under ISO 13485, IEC 62304, and ISO 14971—owns design history files through reviews and toward release",
      ],
      images: [
        // { src: "assets/images/taurus-1.jpg", caption: "Test fixture overview" },
      ],
    },
    {
      id: "trimuh",
      role: "Research Assistant",
      org: "RI-MUHC SuPER Lab",
      location: "Montréal, QC",
      dates: "May 2023 – Present",
      summary:
        "Roughly 30–40% of time on coordination and integration across the lab; the rest on hands-on technical work—simulation, modeling, ML/control, and conference-level communication of results.",
      bullets: [
        "Agile delivery of real-time surgical simulation (C++, C#, Qt, Unity, Linux)—coordinates integration milestones and cross-discipline alignment with the lab team, alongside sustained hands-on work in the stack",
        "Defines and refines physical tool concepts in SolidWorks; supports design decisions with structural contact analysis (Ansys)",
        "Reduces technical risk on flexible-robot behavior through MATLAB models and Python/PyTorch-based dynamics and control work",
        "Communicates program progress and technical results externally (IROS, HSMR)—stakeholder-ready narrative around complex systems",
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
        "Program-level technical leadership for a ~20–25 person team on roughly $100k/year program budget: requirements flow-down, verification planning, and cross-subsystem integration for a competition vehicle.",
      bullets: [
        "Drove system-level planning with KPIs, Excel, and MATLAB—translated vehicle goals into subsystem requirements and tracked trade-offs across subsystems",
        "Owned transmission structural integrity (Siemens NX/CAE)—analysis-backed recommendations for a safety-critical load path",
        "Aligned chassis CAE setup (modal analysis, 1-D connections) so downstream structural results were comparable across subsystems",
        "Planned and executed sensor-based verification (strain, acceleration, load)—evidence for integration milestones ahead of competition",
        "Delivered manufacturing-ready outputs: controlled technical drawings and MasterCAM G-code for CNC milling and lathing",
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
        "Delivered vibration analyses (random and sinusoidal) using Simcenter FEMAP and Maya SATK—clear outputs clients could act on",
        "Built system-level Amesim models (powertrain, thermal) to connect physics to customer problems and solution positioning",
        "Supported sales-facing technical narrative—client presentations on the Simcenter portfolio tying capability to buyer needs",
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
        "Traceability at scale plus internal tooling with a small plant R&D team—data, process, and a web/ML system that stayed in use.",
      bullets: [
        "Built and maintained Excel-based traceability for ~$48M in tooling tags—brought structure to a high-stakes plant data problem and supported audit readiness",
        "Designed tracking hardware (SolidWorks) with deformation analysis—practical mounts that operations could actually deploy",
        "With a small on-site R&D team, delivered an internal web client (HTML, JS, Flask) and ML stack (Python, TensorFlow, OpenCV, SQL) on Raspberry Pi for QA and inventory—the system remains in use",
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
        "Founded and ran a CAD tutoring service—mentorship and structured workshops (SolidWorks, Siemens NX) for peers",
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
        "Supported Gen Chem 1 & 2 learners on discussion boards—clear, timely answers at high volume",
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
        "TA for Intermediate Calculus—office hours plus planned weekly workshops to close gaps before assessments",
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
