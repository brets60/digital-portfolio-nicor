import type { Capability } from '../types';

export const CAPABILITIES: Capability[] = [
  {
    id: "web-apps",
    number: "01",
    title: "WEB APPLICATIONS",
    summary: "Responsive, easy-to-use websites and web applications.",
    deepDive: "Building frontends that load fast, look clean on every device, and feel natural to navigate. I focus on clear component structure, type safety with TypeScript, and simple state management.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "REST APIs"],
    architectures: ["Responsive Layouts", "Clean Components", "Fast Load Times", "Accessible UI"]
  },
  {
    id: "iot-embedded",
    number: "02",
    title: "EMBEDDED & IOT SOLUTIONS",
    summary: "Connecting microcontrollers, cameras, and sensors to practical software.",
    deepDive: "Writing code that bridges the physical and digital worlds. From programming ESP32 cameras to read optical signals, to wiring Arduino sensor arrays that trigger real-world alert lights and sirens.",
    technologies: ["ESP32-CAM", "Arduino", "C++", "Sensors", "Relay Arrays", "Serial Comms"],
    architectures: ["Hardware Interrupts", "Real-Time Triggers", "Sensor Calibration", "Offline Reliability"]
  },
  {
    id: "python-vision",
    number: "03",
    title: "PYTHON & COMPUTER VISION",
    summary: "Image processing, speed tracking, and automated scripting.",
    deepDive: "Using Python and OpenCV to analyze video streams, measure displacement across frames, and automate repetitive tasks. Focused on practical applications like road safety and local automated reporting.",
    technologies: ["Python", "OpenCV", "NumPy", "Flask", "Automation Scripts"],
    architectures: ["Frame Processing", "Motion Detection", "Automated Logging", "Local Workers"]
  },
  {
    id: "database-systems",
    number: "04",
    title: "DATABASE SYSTEMS",
    summary: "Reliable database tables and queries that keep records organized.",
    deepDive: "Designing clear relational tables where data stays safe, structured, and fast to retrieve. Experienced in local lightweight SQLite ledgers as well as multi-table MySQL and PostgreSQL setups.",
    technologies: ["SQLite", "MySQL", "PostgreSQL", "SQL Queries", "Prisma"],
    architectures: ["Clean Relational Tables", "Fast Lookups", "Data Integrity", "Local Storage"]
  },
  {
    id: "backend-apis",
    number: "05",
    title: "BACKEND & APIS",
    summary: "Server logic, REST endpoints, and secure data handling.",
    deepDive: "Writing backend endpoints that connect user interfaces to databases reliably. Keeping routes clean, checking user input carefully, and making sure errors are handled gracefully.",
    technologies: ["Node.js", "Express", "Python (Flask)", "REST APIs", "JSON"],
    architectures: ["RESTful Routing", "Input Validation", "Error Handling", "Modular Controllers"]
  },
  {
    id: "ui-design",
    number: "06",
    title: "INTERFACE & VISUAL ERGONOMICS",
    summary: "Clean typography, intuitive layouts, and distraction-free design.",
    deepDive: "Believing that good design is mostly about clarity. Picking strong readable typography, sensible spacing, and high contrast so visitors can find what they need without confusion.",
    technologies: ["Tailwind CSS", "Figma", "Typography", "Color Systems", "Wireframing"],
    architectures: ["Content-First Hierarchy", "Mobile Optimization", "Clean Contrast", "Minimal Clutter"]
  }
];
