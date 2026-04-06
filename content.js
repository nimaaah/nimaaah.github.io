/**
 * Portfolio content — optimized for TPM/Product Management roles.
 * Dates preserved exactly as per original input.
 */
window.PORTFOLIO_CONTENT = {
  name: "Nima Hemati",
  title: "Technical & Product-Minded Developer",
  tagline:
    "A mechanical engineering graduate with a systems lens—specializing in the intersection of technical roadmaps, stakeholder alignment, and high-stakes delivery of hardware-software systems in regulated environments.",
  headshot: {
    src: "assets/images/headshot.png",
    alt: "Professional headshot of Nima Hemati",
  },
  contact: {
    email: "nima.hemati@mail.mcgill.ca",
    github: "https://github.com/nimaaah",
    links: [
      { label: "LinkedIn", href: "https://ca.linkedin.com/in/nima-hemati" },
    ],
  },
  profile:
    "Graduate student and FRQNT scholar at McGill’s Department of Surgical and Interventional Sciences, focused on control schemes and clinician-centric interfaces for cardiovascular surgical robotics. I specialize in translating complex engineering depth into actionable priorities, timelines, and stakeholder-ready communication. With extensive experience in requirements engineering, Agile delivery, and regulatory compliance (ISO 13485/IEC 62304), I gravitate toward Technical Product and Program Management roles where owning product outcomes and cross-functional alignment is paramount.",

  /** Visual work samples between Skills and Experience; swap src paths for your own images. */
  portfolio: {
    heading: "Portfolio",
    items: [
      {
        src: "assets/images/headshot.png",
        caption:
          "Replace with your shot: context, what you owned or built, and why it mattered for the program or stakeholders.",
      },
      {
        src: "assets/images/headshot.png",
        caption:
          "Setup, hardware or software stack, and outcome — verification milestone, user study, or competition run.",
      },
      {
        src: "assets/images/headshot.png",
        caption:
          "Team demos, integration work, or field testing — enough detail for a technical reader to grasp scope.",
      },
      {
        src: "assets/images/headshot.png",
        caption:
          "Bench testing or lab validation: tie the photo to a metric, requirement, or risk you helped close.",
      },
      {
        src: "assets/images/headshot.png",
        caption:
          "Design review or stakeholder session: who was in the room and what decision or alignment moved forward.",
      },
      {
        src: "assets/images/headshot.png",
        caption:
          "Manufacturing or prototype build: process, tools, and how it de-risked schedule or cost.",
      },
    ],
  },

  skillGroups: [
    {
      title: "Product Delivery & Leadership",
      items: [
        "Technical Program Management: Subsystem ownership across vehicle programs, lab software, and medical startups",
        "Agile Frameworks: Leading sprints, backlog prioritization, and cross-functional integration milestones",
        "Stakeholder Management: Defining KPIs, delivering executive presentations, and leading formal design reviews",
        "Regulatory & Risk Strategy: Exposure to ISO 13485, IEC 62304, and ISO 14971 risk management standards",
        "Bilingual: Fluent in English and French (Professional & Technical)",
      ],
    },
    {
      title: "Systems Engineering & CAE",
      items: [
        "Advanced Simulation: Siemens NX/CAE, Simcenter FEMAP, Amesim, Star-CCM+, HEEDS, Maya SATK",
        "Design Tools: SolidWorks, Ansys Workbench, Abaqus, MasterCAM, Autodesk Fusion",
        "Visualization: Unreal Engine for high-fidelity rendering of surgical equipment and UI/UX concepts",
        "Documentation: Managing requirements traceability, technical specs, and program-level tracking",
      ],
    },
    {
      title: "Software & Data Strategy",
      items: [
        "Languages: C++, C#, Python, MATLAB, Java, JavaScript — proficient for engineering team collaboration",
        "AI / ML: PyTorch, TensorFlow, scikit-learn, OpenCV (leveraged for research and shipped internal tooling)",
        "Technical Stack: Git, Jira, SQL, Qt, Unity, Linux (Ubuntu)",
      ],
    },
  ],

  experience: [
    {
      id: "holoray",
      role: "Robotics Developer",
      org: "HoloRay",
      location: "Westmount, QC",
      dates: "Nov 2025 – Present",
      summary:
        "Directing partner integrations for teleoperation robotics on HoloRay’s cloud platform, owning the product lifecycle from initial demo to external stakeholder engagement.",
      bullets: [
        "Leading the co-development of a teleoperation platform integrated with HoloRay’s proprietary cloud communications stack.",
        "Managing integration hardening and reliability rehearsals to ensure system stability during live high-visibility demonstrations.",
        "Synthesizing technical architecture and partner-value propositions for both technical and business-oriented audiences.",
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
        "Managing cardiovascular robotics projects from design through live clinical and investor presentations, ensuring alignment with regulated documentation and hardware–software integration goals.",
      bullets: [
        "Translates complex robotic performance into tailored narratives for clinical, technical, and investment stakeholders.",
        "Oversees the end-to-end delivery of mechanical test equipment (SolidWorks, DFM), utilizing AM prototyping to mitigate schedule risks.",
        "Mitigates program-level risk by identifying and resolving hardware-software conflicts through rigorous bench-level verification.",
        "Drives Root Cause Analysis (RCA) and CAPA initiatives, ensuring corrective actions improve system reliability and compliance.",
        "Serves as primary author for technical documentation under ISO 13485 and IEC 62304, owning the design history file through release.",
        "Recruited and onboarded exceptional candidates to join the project, delegated technical requirements, mentored, and provided guidance on the technical stack.",
      ],
      images: [],
    },
    {
      id: "myradio",
      role: "Founder",
      org: "MyRadio",
      location: "Montréal, QC",
      dates: "Sep 2025 – Present",
      summary:
        "Defining the product vision and manufacturing path for personalized 3D-printed anatomical models derived from patient CT/MRI data.",
      bullets: [
        "Founded MyRadio to bridge the gap between medical imaging and tangible patient/clinician educational tools.",
        "Leads the end-to-end product definition, customer discovery, and small-batch manufacturing operations.",
      ],
      images: [],
    },
    {
      id: "trimuh",
      role: "Research Assistant (Technical Lead)",
      org: "RI-MUHC SuPER Lab",
      location: "Montréal, QC",
      dates: "May 2023 – Present",
      summary:
        "Strategically balancing technical research (60%) with lab-wide coordination and system integration (40%) across multi-disciplinary teams.",
      bullets: [
        "Coordinates Agile delivery for real-time surgical simulations (C++, Qt, Unity), aligning integration milestones across the lab.",
        "Validates physical tool concepts using structural contact analysis (Ansys) to back design decisions with empirical data.",
        "De-risks complex robotic behaviors through PyTorch-based dynamics modeling and control logic development.",
        "Presents system-level findings at international conferences (IROS, HSMR), employing technical storytelling to convey complex data.",
      ],
      images: [],
    },
    {
      id: "baja",
      role: "Technical Director",
      org: "McGill Baja Racing",
      location: "Montréal, QC",
      dates: "Sep 2019 – May 2023",
      summary:
        "Provided program-level technical leadership for a 25-person engineering team with a $100k annual budget, overseeing requirements flow-down and vehicle-wide integration.",
      bullets: [
        "Scaled leadership from subsystem lead to Technical Director, owning the technical roadmap and vehicle-wide integration strategy.",
        "Established system-level KPIs to translate competition objectives into actionable subsystem requirements and trade-offs.",
        "Ensured structural safety of critical load paths through Siemens NX/CAE and sensor-based verification (strain, acceleration, load).",
        "Standardized chassis CAE protocols to ensure consistent, data-driven decision-making across all engineering subsystems.",
        "Managed the delivery of manufacturing-ready documentation, including controlled drawings and MasterCAM G-code for CNC production.",
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
        "Bridged technical Simcenter Amesim models with client requirements through presales storytelling and high-fidelity simulation visualization.",
      bullets: [
        "Built system-level simulations tailored to specific client technical requirements and functional specifications.",
        "Authored marketing documentation and media, making advanced technical capabilities legible to non-expert stakeholders.",
        "Developed realistic renderings for surgical equipment using Siemens NX and Unreal Engine to support high-stakes client bids.",
        "Optimized design spaces using HEEDS to refine simulation accuracy and strengthen client-facing project deliverables.",
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
        "Improved plant-scale traceability and operational insight through the delivery of a custom-built web/ML stack that remains in production.",
      bullets: [
        "Developed and deployed ML models (TensorFlow, OpenCV) to automate quality assurance and inventory tracking.",
        "Shipped a production web client (Flask, SQL) to augment live inventory data, moving beyond static slide-deck prototypes.",
        "Maintained traceability for $48M in tooling tags and invoicing workflows, ensuring audit-level data integrity in Excel.",
        "Analyzed shop-floor downtime using HMI and PLC data to convert raw signals into actionable operational improvements.",
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
        "Founded and managed McGill aCADemy, establishing peer-mentorship structures and CAD workshops for Siemens NX and SolidWorks.",
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
        "Awards: Graduate Excellence Award; FRQNT Scholar",
      ],
      images: [],
    },
    {
      degree: "B.Eng. (Honours), Mechanical Engineering",
      school: "McGill University",
      location: "Montréal, QC",
      dates: "Sep 2019 – May 2024",
      highlights: [
        "GPA: 3.73/4.00 (Minor in Software Engineering)",
        "Thesis: Trajectory planning and control for a hydraulic log-loading manipulator",
        "Activities: Technical Director, McGill Baja Racing",
        "Awards: Dean’s Honor List; Class of 1983 Scholarship",
      ],
      images: [],
    },
  ],

  pdfCvPath: "Nima_Hemati_CV.pdf",
};