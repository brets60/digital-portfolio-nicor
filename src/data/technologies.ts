import type { TechCategory, ExploreArea, PersonalValue } from '../types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "FRONTEND",
    description: "Building responsive, clean interfaces that load fast and look good on any screen.",
    items: [
      { name: "React", level: "Primary", note: "Component structure, custom hooks, state" },
      { name: "TypeScript", level: "Core", note: "Type safety, catching errors early" },
      { name: "JavaScript", level: "Core", note: "ES6+, DOM APIs, async/await" },
      { name: "Tailwind CSS", level: "Styling", note: "Clean responsive layout and design" },
      { name: "HTML & CSS", level: "Foundation", note: "Semantic structure, responsive grids" }
    ]
  },
  {
    category: "BACKEND & LOGIC",
    description: "Writing reliable server routes, data processing scripts, and computer vision tasks.",
    items: [
      { name: "Python", level: "Primary", note: "OpenCV computer vision, scripts, automation" },
      { name: "Flask", level: "APIs", note: "Lightweight local backends and endpoints" },
      { name: "Node.js", level: "Runtime", note: "JavaScript on the server" },
      { name: "Express", level: "APIs", note: "REST endpoints, middleware, routing" }
    ]
  },
  {
    category: "HARDWARE & IOT",
    description: "Connecting microcontrollers, cameras, and physical sensors to software.",
    items: [
      { name: "ESP32-CAM", level: "Edge Device", note: "Video streaming, optical frame capture" },
      { name: "Arduino Uno", level: "Controller", note: "Physical relays, strobes, ultrasonic sensors" },
      { name: "OpenCV", level: "Vision", note: "Frame delta analysis, speed tracking" },
      { name: "C / C++", level: "Embedded", note: "Firmware, GPIO pins, hardware loops" }
    ]
  },
  {
    category: "DATABASES",
    description: "Storing project records, logs, and user data cleanly.",
    items: [
      { name: "SQLite", level: "Primary (Edge)", note: "Fast local database for incident logs" },
      { name: "MySQL", level: "Relational", note: "Relational tables and queries" },
      { name: "PostgreSQL", level: "Relational", note: "Structured data storage" }
    ]
  },
  {
    category: "TOOLS & WORKFLOW",
    description: "Tools I use daily to write code, test circuits, and manage projects.",
    items: [
      { name: "Git & GitHub", level: "Version Control", note: "Tracking changes, managing repositories" },
      { name: "VS Code", level: "Editor", note: "Full-stack web & Python development" },
      { name: "Arduino IDE", level: "Hardware", note: "Flashing sketches to boards" },
      { name: "Postman", level: "API Testing", note: "Testing endpoints and JSON responses" }
    ]
  }
];

export const CURRENT_EXPLORING: ExploreArea[] = [
  {
    tag: "COMPUTER VISION",
    title: "Real-Time Object & Motion Tracking",
    description: "Testing different camera resolutions and lighting filters in OpenCV to make vehicle and pedestrian detection more reliable in poor weather.",
    currentStudy: "Benchmarking frame processing speed on compact boards."
  },
  {
    tag: "HARDWARE INTEGRATION",
    title: "ESP32 Camera Streaming & Low-Power Relays",
    description: "Experimenting with lower-latency video feeds and reliable sensor triggers that can run smoothly on solar or battery backup.",
    currentStudy: "Prototyping faster hardware signal handoffs between ESP32 and Arduino."
  },
  {
    tag: "FULL-STACK WEB",
    title: "Lightweight Dashboards & Live Telemetry",
    description: "Building responsive dashboards that display live device telemetry and camera snapshots without slowing down the browser.",
    currentStudy: "Using React with local SQLite data streams for instant log viewing."
  }
];

export const PERSONAL_VALUES: PersonalValue[] = [
  {
    number: "01",
    title: "SIMPLICITY",
    statement: "Keep systems simple and easy to maintain.",
    description: "If a simple solution works reliably, there's no need to overcomplicate it. Clean code and straightforward wiring are easier to debug, maintain, and expand."
  },
  {
    number: "02",
    title: "PURPOSE",
    statement: "Build things that actually help someone.",
    description: "Technology is most rewarding when it solves a real problem—like alerting people when a speeding car approaches a crosswalk, or automating a repetitive daily task."
  },
  {
    number: "03",
    title: "LEARNING",
    statement: "Learn by building, testing, and improving.",
    description: "The best way to learn is hands-on: write the code, wire up the breadboard, see where it fails in the real world, and make it better."
  }
];
