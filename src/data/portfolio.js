export const personalInfo = {
  name: "Hesham Amr Mohamed Samir Elkateb",
  title: "Computer Engineering Student | Software Developer | AI & Data Enthusiast",
  location: "Cairo, Egypt",
  email: "hesham.amr.elkateb@gmail.com",
  linkedin: "https://linkedin.com/in/hesham-elkateb-a18318386",
  github: "https://github.com/hesham-elkateb",
};

export const about = {
  bio: "I am a 3rd-year Computer Engineering student at Egypt University of Informatics (EUI) with a GPA of 3.49/4.0. I am passionate about software engineering, AI, machine learning, data analysis, and modern web technologies. With experience in Python, C, C++, and customer-facing professional environments, I aim to present myself as ambitious, technically skilled, and highly motivated for internship and career opportunities.",
};

export const education = {
  institution: "Egypt University of Informatics (EUI)",
  degree: "B.Sc. Computer Engineering",
  period: "2022 – Expected 2028",
  gpa: "3.49 / 4.0",
  coursework: [
    "Data Structures",
    "Operating Systems",
    "Computer Architecture",
    "Digital Logic",
    "Algorithms",
    "OOP"
  ]
};

export const experience = [
  {
    id: 1,
    company: "VOIS Egypt",
    role: "International Account Advisor",
    period: "2024 – Present",
    description: "Professional support for international clients. Strong communication and problem-solving. Cross-functional teamwork in a fast-paced multilingual environment.",
    languages: ["Arabic", "English", "German"],
    icon: "headphones"
  },
  {
    id: 2,
    company: "Advansys",
    role: "Software Engineering Intern",
    period: "Summer 2024",
    description: "Agile development experience. Debugging and testing. SDLC exposure. Collaboration with senior engineers. Software feature implementation.",
    icon: "code"
  }
];

export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 75 }
  ],
  technologies: [
    { name: "React", level: 85 },
    { name: "Tailwind", level: 90 },
    { name: "Git/GitHub", level: 85 },
    { name: "Machine Learning", level: 70 },
    { name: "Data Analysis", level: 75 }
  ],
  concepts: [
    { name: "OOP", level: 90 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Problem Solving", level: 95 },
    { name: "SDLC", level: 75 },
    { name: "Memory Management", level: 70 }
  ]
};

export const languages = [
  { name: "Arabic", level: "Native", fluency: 100 },
  { name: "English", level: "Fluent", fluency: 95 },
  { name: "German", level: "Fluent", fluency: 80 }
];

export const projects = [
  {
    id: 1,
    title: "Football Data Analysis",
    description: "AI-powered FIFA Career Mode decision-support system using machine learning for match simulation, player evaluation, squad planning, and transfer analysis. Features multiple ML models with impressive accuracy metrics.",
    technologies: ["Python", "Machine Learning", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    github: "https://github.com/abdulrahman-111/Football-Data-Analysis",
    featured: true,
    stats: [
      { label: "Shot Prediction Accuracy", value: "89.7%" },
      { label: "Injury Risk Accuracy", value: "95.0%" },
      { label: "Rating Prediction R²", value: "0.9801" },
      { label: "Position Classification", value: "82.82%" }
    ],
    features: [
      "Match simulation engine with Decision Tree and Linear Regression",
      "Player development and squad planning with Polynomial Regression",
      "Transfer decision engine with Random Forest",
      "Automated scouting report generation in .docx format"
    ]
  },
  {
    id: 2,
    title: "AI Face Recognition System",
    description: "Real-time face detection and recognition system using deep learning models. Implements face verification, identification, and liveness detection for security applications.",
    technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "dlib"],
    github: "#",
    featured: false
  },
  {
    id: 3,
    title: "Computer Vision Object Detector",
    description: "Multi-object detection system using YOLO and custom-trained models. Supports real-time video analysis with bounding box visualization and class prediction.",
    technologies: ["Python", "YOLO", "OpenCV", "PyTorch", "NumPy"],
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive data visualization dashboard for business intelligence. Features dynamic charts, filtering, export capabilities, and real-time data updates.",
    technologies: ["React", "D3.js", "Python", "pandas", "FastAPI"],
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Modern Web Application",
    description: "Full-stack web application with authentication, database integration, RESTful APIs, and responsive design. Built with modern frameworks and best practices.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "#",
    featured: false
  }
];