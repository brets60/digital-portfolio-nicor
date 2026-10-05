import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "speed-detection-system",
    number: "01",
    title: "Speed Detection and Warning System",
    category: "IOT",
    categoryLabel: "IoT & Embedded Safety System",
    year: "2026",
    tagline: "Smart speed monitoring with instant pedestrian alerts and local camera logging.",
    shortDescription: "A smart road safety device that calculates vehicle speed in real-time, triggers instant warning lights to protect pedestrians, and logs snapshots to a local database for CCTV monitoring.",
    technologies: [
      "Arduino",
      "ESP32-CAM",
      "Python",
      "OpenCV",
      "SQLite",
      "Sensors"
    ],
    featuredImage: "speed-radar",
    caseStudy: {
      overview: "Commercial radar signs and speed cameras are often too expensive for local school zones and residential streets. I built this system to create an affordable, reliable alternative using an ESP32-CAM, Arduino, and Python that can accurately detect speeding cars and warn people before an accident happens.",
      problem: {
        title: "The Problem",
        points: [
          "Commercial speed traps and radar systems cost thousands of dollars, making them inaccessible for small neighborhoods and school areas.",
          "Regular road humps don't actively warn pedestrians when a fast car is approaching around blind corners.",
          "Community safety teams often lack concrete photo evidence when repeated speeding happens.",
          "Systems that rely completely on cloud servers fail whenever the local internet goes down."
        ]
      },
      idea: {
        title: "The Approach",
        description: "Combine a low-cost ESP32 camera and sensors with a local Python script running OpenCV. As a car passes calibrated markers, the system calculates its speed. If it's going too fast, it immediately fires warning strobes and saves a photo to a local SQLite database."
      },
      solution: {
        title: "How It Works in the Real World",
        description: "The hardware is split into two reliable parts: the microcontrollers handling the physical sensors and alert lights, and a Python computer vision worker doing the speed math.",
        highlights: [
          "Tracks vehicle speed using two calibrated virtual markers on the camera feed.",
          "Flashes bright visual strobe lights in under 100 milliseconds if a vehicle exceeds the speed limit.",
          "Takes a clear photo timestamped with the recorded speed and saves it locally.",
          "Works completely offline without needing an internet connection."
        ]
      },
      howItWorks: [
        {
          step: "01",
          title: "Detecting the Vehicle",
          description: "Sensors pick up when a vehicle enters the monitored road zone."
        },
        {
          step: "02",
          title: "Calculating Speed",
          description: "The ESP32 camera feed is processed in Python. The time taken to move between two known distance points gives the vehicle's speed."
        },
        {
          step: "03",
          title: "Triggering the Warning",
          description: "If the car is going over the limit (for example, 30 km/h in a school lane), the Arduino activates the pedestrian warning strobe immediately."
        },
        {
          step: "04",
          title: "Saving the Snapshot",
          description: "A snapshot of the vehicle, the exact speed, and the date and time are saved directly into a local SQLite database."
        }
      ],
      technology: {
        stack: [
          { category: "Hardware", tools: ["ESP32-CAM", "Arduino Uno", "Sensors", "Relay Module", "LED Strobes"] },
          { category: "Software & Vision", tools: ["Python", "OpenCV", "NumPy"] },
          { category: "Database & UI", tools: ["SQLite", "Local Web Dashboard"] }
        ],
        rationale: "Using an ESP32-CAM with an Arduino and Python kept total hardware costs under ₱2,500 while delivering accurate speed tracking suitable for neighborhood streets."
      },
      keyFeatures: [
        { title: "Optical Speed Tracking", detail: "Measures speed accurately across calibrated distance markers." },
        { title: "Instant Strobe Warning", detail: "Flashes brightly to warn both the driver and nearby pedestrians." },
        { title: "Local Photo Ledger", detail: "Saves snapshots and timestamps directly to SQLite for security review." },
        { title: "100% Offline Capability", detail: "Continues running reliably even during network outages." }
      ],
      result: {
        outcome: "Successfully built and tested a working prototype that accurately calculates vehicle speed and logs speeding events with photos in real-time.",
        learnings: [
          "Adjusting camera exposure and contrast was important to prevent shadows from throwing off detection.",
          "Separating the camera feed from the Arduino's alert signals made the response time much faster.",
          "Local SQLite storage made reviewing past logs simple without needing any complex cloud database."
        ]
      },
      architecture: {
        nodes: [
          { id: "cam", label: "ESP32-CAM", role: "Captures Video Stream", category: "input" },
          { id: "cv", label: "Python (OpenCV)", role: "Calculates Speed", category: "processing" },
          { id: "mcu", label: "Arduino Uno", role: "Triggers Strobe Alerts", category: "output" },
          { id: "db", label: "SQLite Database", role: "Stores Photos & Logs", category: "database" }
        ],
        pipeline: [
          "Vehicle Detected",
          "Speed Calculated",
          "Speed Limit Check",
          "Warning Strobes Flashed",
          "Snapshot Logged"
        ]
      },
      links: [
        { label: "Hardware Schematics & Code", type: "github", statusNote: "Code and circuit diagrams available" },
        { label: "Interactive Radar Test Bench", type: "demo", statusNote: "Interactive simulator below" }
      ],
      simulatorType: "speed-radar"
    }
  }
];
