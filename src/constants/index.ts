
export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
    name: "Newaz Nezif Abagero",
    title: "Cybersecurity Analyst | AI-Focused Full-Stack Developer",
    email: "newaznezif@gmail.com",
    phone: "(+250) 953652707",
    github: "https://github.com/Newaznezif/",
    linkedin: "https://linkedin.com/in/newaz-nezif-285439262",
    location: "Addis Ababa, Ethiopia",
    bio: "Cybersecurity analyst experienced in national-level threat monitoring, vulnerability assessment, and secure software development. Focused on protecting digital infrastructure and building resilient, intelligent systems.",
};

export const SKILLS = [
    {
        category: "Technical Skills",
        items: [
            "Python", "Java", "Java EE", "SQL", "MySQL", "MongoDB", "Oracle",
            "Full-Stack Web Development", "Network & System Administration",
            "Penetration Testing", "Vulnerability Assessment", "Threat Monitoring",
            "ETL", "Regression", "EDA", "Data Visualization", "Statistical Analysis", "Feature Engineering"
        ],
    },
    {
        category: "Software Tools",
        items: [
            "Wireshark", "Kali Linux", "Splunk", "Wazuh", "Kibana", "Git", "Docker",
            "Microsoft Project", "Matplotlib", "Plotly", "CI/CD", "PyTorch", "TensorFlow"
        ],
    },
];

export const EXPERIENCE = [
    {
        role: "Youth Advisory Council Member",
        company: "EngenderHealth Ethiopia",
        location: "Ethiopia",
        period: "Present",
        description: [
            "Leads youth capacity-building and leadership initiatives.",
            "Drives digital SRHR advocacy to empower young people and foster regional community engagement.",
        ],
    },
    {
        role: "Cybersecurity Analyst",
        company: "FDRE INSA",
        location: "Ethiopia",
        period: "04/2025 – Present",
        description: [
            "24/7 Monitoring of national cybersecurity threats and implementing mitigation strategies.",
            "Conducted vulnerability assessments and penetration testing, identifying and resolving critical security gaps.",
            "Collaborated on policy development to improve operational efficiency and security compliance.",
        ],
    },
    {
        role: "Cybersecurity Intern",
        company: "Future Interns",
        location: "India-Remote",
        period: "11/2025 – 12/2025",
        description: [
            "Analyzed web application attacks to identify vulnerabilities.",
            "Developed a full-stack, secure file-sharing platform in Python.",
            "Investigated system logs to enhance security monitoring and response.",
            "Completed tasks on OWASP Juice Shop security assessment and SOC analysis."
        ],
    },
    {
        role: "NID (Fayida) Officer",
        company: "Ethio Telecom",
        location: "Ethiopia",
        period: "09/2024 – 04/2025",
        description: [
            "Enrolled 4,000+ citizens in Ethiopia’s digital ID system, ensuring data integrity.",
            "Ensured regulatory compliance and supported registration processes.",
        ],
    },
    {
        role: "Marketing Associate",
        company: "Sememen Technology PLC",
        location: "Ethiopia",
        period: "05/2023",
        description: [
            "Conducted market research and developed client-specific marketing strategies.",
            "Assisted in digital marketing campaigns to enhance client engagement.",
        ],
    },
    {
        role: "Academic Writer & Research Assistant",
        company: "Private Contract",
        location: "Ethiopia",
        period: "02/2022 – Present",
        description: [
            "Conducted literature reviews, data analysis, and report writing for academic projects.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Credit Risk Probability Model",
        description: "End-to-end credit risk model using alternative eCommerce data. Features RFM analysis, ML pipeline with MLflow, and FastAPI/Docker deployment.",
        tech: ["Python", "Machine Learning", "MLflow", "FastAPI", "Docker"],
        github: "https://lnkd.in/d22gYNiw",
        link: "https://lnkd.in/dCsUp2cx"
    },
    {
        title: "Insurance Risk Analytics",
        description: "Predictive modeling for car insurance risk using hypothesis testing and ML. Includes risk-based premium framework and DVC workflows.",
        tech: ["Python", "Pandas", "Scikit-learn", "DVC", "Git"],
        github: "https://lnkd.in/dBNDAuHN",
        link: "#"
    },
    {
        title: "Secure File Sharing System",
        description: "AES-256-GCM encrypted file sharing with key wrapping, secure memory handling, and auto-expiring links.",
        tech: ["Python Flask", "PyCryptodome", "AES-256", "Web Security"],
        github: "https://lnkd.in/dSQBkd4Q",
        link: "#"
    },
    {
        title: "Fintech Customer Analytics",
        description: "NLP-based sentiment analysis of 1,800+ banking app reviews to extract customer insights and pain points.",
        tech: ["Python", "NLP", "PostgreSQL", "Transformers"],
        github: "https://lnkd.in/dEEdHjNP",
        link: "https://lnkd.in/d9g2hkke"
    },
    {
        title: "E-commerce Website",
        description: "Full-stack E-commerce platform with user authentication, product catalog, secure payment integration, and optimized database queries.",
        tech: ["Full-Stack", "Database Optimization", "Security"],
        github: "https://github.com/Newaznezif/",
        link: "#"
    },
    {
        title: "Security Log Analysis (SOC)",
        description: "Threat detection using Elasticsearch & Kibana. Analyzed failed logins, malware detections, and correlated IP activities.",
        tech: ["Elasticsearch", "Kibana", "SOC", "Log Analysis"],
        github: "#",
        link: "#"
    },
];

export const CERTIFICATIONS = [
    { name: "Certified Cybersecurity Analyst", issuer: "ISC2", year: "2025" },
    { name: "Certified Cybersecurity Educator Professional", issuer: "CCEP", year: "2025" },
    { name: "SOC Analysis", issuer: "TryHackMe", year: "2025" },
    { name: "Cybersecurity Fundamentals", issuer: "Cisco / ADB Institute", year: "2025" },
    { name: "Ethical Hacking (CEH prep)", issuer: "Cisco / LetsDefend", year: "2024" },
    { name: "Team Leadership & Coordination", issuer: "U.S. Embassy", year: "2024" },
    { name: "HCIA-Datacom V1.0", issuer: "Huawei", year: "2023" },
    { name: "Microsoft Project Management", issuer: "Microsoft", year: "2023" },
    { name: "Artificial Intelligence", issuer: "Simplilearn", year: "2023" },
    { name: "Database Foundations", issuer: "Oracle Academy", year: "2022" },
    { name: "Programming in Java EE", issuer: "Red Hat Academy", year: "2022" },
    { name: "Python 101 for Data Science", issuer: "Cognitive Class", year: "2021" },
];

export const EDUCATION = [
    {
        degree: "BSc. Information Systems",
        school: "Wolkite University",
        location: "Ethiopia",
        period: "2021 – 2024",
        details: "GPA: 3.35/4.00 | Exit Exam Score: 72% | Specialization: Database Management, Cybersecurity, Full-Stack Development, AI & Data Analysis",
    },
];

export const AWARDS = [
    {
        title: "English Access Microscholarship Program",
        organization: "U.S. Department of State",
        year: "2018–2020",
        description: "Two-year intensive English program sponsored by the U.S. Embassy.",
    },
];

export const VOLUNTEERING = [
    {
        role: "Event Coordination Assistant",
        event: "ETEXT 2025",
        year: "2025",
    },
    {
        role: "Runner Support",
        event: "Great Ethiopian Run",
        year: "2025",
    },
    {
        role: "Open-Source Contributor",
        event: "GitHub Community",
        year: "2023 – Present",
    },
];
