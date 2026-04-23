// ─── EDIT ALL YOUR CONTENT HERE ──────────────────────────────────────────────
// This is the single source of truth for your portfolio.
// Update this file to change any text, links, or data across the whole site.

export const profile = {
  name: 'Ryan Dang',
  initials: 'RD',
  language:['English','Vietnamese','Cantonese'],
  role: 'Software Engineer',
  location: 'Toronto, CA',
  email: 'ryandang7890@gmail.com',
  github: 'https://github.com/RRyanDang',
  githubHandle: 'github.com/RRyanDang',
  linkedin: 'https://www.linkedin.com/in/vmdang/',
  linkedinHandle: 'linkedin.com/in/vmdang',
  tagline: 'a software engineer\nwho loves to build.',
  bio: 'I turn complex problems into clean, thoughtful software. I care deeply about the people who use what I build — and the teammates I build it with.',
  openToWork: true,
  stats: [
    { value: '2.5+', label: 'Years exp' },
    { value: '10+', label: 'Projects' },
    { value: '∞', label: 'Coffee ☕' },
    { value: '6+', label: 'Months 🎹' },
  ],
}

export const skills = [
  {
    icon: '🗣️',
    title: 'Languages',
    tags: ['Python', 'TypeScript', 'Java', 'C++', 'Go', 'SQL'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: ['Vue 3', 'React', 'Vite', 'Tailwind', 'HTML/CSS', 'GraphQL'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'REST'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
  },
]

export const projects = [
  {
    title: 'Stocky',
    description: 'A powerfull stock market analysis & predictor tool that provides real-time data visualization and predictive analytics to help investors make informed decisions.',
    tags: ["Python","React", "FastAPI", "Streamlit","SQLite","Pandas","NumPy","Scikit-learn"],
    url: 'https://github.com/RRyanDang/Stocky',
  },
  {
    title: "GrowEasy",
    description: "A modern web application that makes gardening easier for everyone using AI. GrowEasy provides detailed instructions, progress tracking, and AI-powered photo analysis to help you grow healthy plants.",
    tags: ["Python","React", "Tailwind CSS", "Flask", "EfficientNet", "PyTorch", "OpenCV"],
    url: 'https://github.com/RRyanDang/GrowEasy',
  },
  {
    title: "Approach to a safer Toronto",
    description: "A comprehensive data science project analyzing half a million official records of crime for patterns in Toronto to enhance public safety. Utilized data visualization, clustering algorithms, and predictive modeling to identify high-risk areas and suggest actionable preventive measures.",
    tags: ["Python", "Panda", "sklearn","Decision Trees","K-Means Clustering","Apriori Algorithm"],
    url: "https://github.com/RRyanDang/Analysis-of-Crime-Patterns-in-Toronto-A-Data-Mining-Approach-to-Public-Safety"
  },
  {
    title: "Autonomous Car for NEM 2025",
    description: "An autonomous car that sees, thinks, and acts in real time. By training a custom YOLOv8 object detection model and integrating it with Raspberry Pi vision processing and microcontroller-based motor control, this project turns raw camera data into intelligent autonomous movement—demonstrating how AI and embedded systems come together to solve real-world problems.",
    tags: ["OpenCV", "YOLOv8", "Raspberry Pi", "C++", "VEX Microcontroller"],
    url: "https://github.com/RRyanDang/Mushroom-Following-Bot"
  },
  {
    title: "Auto Mood Music Player",
    description: "A smart music player that automatically adjusts the playlist based on your current mood, using AI to analyze your behavior and preferences.",
    tags: ["TensorFlow / Keras", "OpenCV", "Gemini API","Youtube Data API"],
    url: "https://github.com/RRyanDang/Emotion-Auto-Music"
  },
  {
    title: "Uber Clone",
    description: "A recreation of the Uber app",
    tags: ["React", "Next.js", "TypeScript","Tailwind CSS","Firebase","Mapbox"],
    url: "https://github.com/RRyanDang/Uber-Clone"
  }
]

export const experience = [
  {
    date: 'Summer 2025',
    role: 'ITS Technologist',
    company: 'Seneca Polytechnic',
    type: 'Co-op',
    description: 'Kept enterprise IT running for thousands of students and staff — reimaging devices, resolving daily support tickets, and tightening workflows across a distributed Windows environment.',
    bullets:[
      'Reimaged and deployed 70+ laptops weekly following enterprise SOPs in a Windows environment',
      'Diagnosed hardware and software issues for 50+ daily users, maintaining 98% workflow compliance',
      'Managed service requests via Salesforce including account setup, access provisioning, and escalation',
      'Maintained IT equipment inventory and coordinated device refresh and procurement requests in MS Excel',
      'Supported 2FA account recovery in Microsoft Authenticator & DUO Mobile and documented troubleshooting procedures for non-technical users',
    ]
  },
  {
    date: '3 months in 2025',
    role: 'Lab & Classroom AV/IT Monitor',
    company: 'Seneca Polytechnic ',
    type: 'Part-time',
    description: 'First responder for AV and IT issues across campus classrooms — keeping lectures running and resolving an average of 15 cases per shift across podiums, projectors, and audio systems.',
    bullets:[
      'Resolved hardware and software issues in real time across campus classrooms each shift',
      'Triaged and responded to live support requests via Outlook during high-demand periods',
      'Coordinated with a 25-person team across 3 campuses via Microsoft Teams to ensure consistent service',
    ]
  },
  {
    date: 'March 2025 - May 2025',
    role: 'Full Stack Developer',
    company: 'PermitX',
    type: 'Contract',
    description: 'Helped build a cloud-connected platform from the ground up at an early-stage startup — shipping both frontend and backend while working directly with the CEO in a fast-moving Agile environment',
    bullets:[
      'Built a responsive full-stack application using React and Next.js from the ground-up',
      'Implemented secure RESTful APIs for CRUD operations across AWS S3 and Azure Blob Storage',
      'Collaborated directly with the CEO and team of 5, incorporating feedback iteratively and holding meetings weekly to discuss progress',
    ]
  },
]

export const clubs = [
  {
    emoji: '🏛️',
    name: 'Seneca Engi. Stu. Society',
    role: 'VP of Academics · 2024–Present',
    description: 'Maintaining a comprehensive resource hub for 500+ engineering students. It’s been rewarding to help my peers succeed and foster a supportive learning community.',
  },
  {
    emoji: '💵',
    name: 'CodeXperts',
    role: ' Treasurer · 2025–Present',
    description: 'Manage finances for a student-run coding club with 200+ members. It’s been rewarding to help grow this club and support other students learning to code.',
  },
]
