import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    subtitle: "Understand what needs fixing.",
    description: "Before writing any code or soldering wires, I take time to understand the actual problem, who will use it, and what constraints exist in the real world.",
    deliverables: [
      "Problem Definition",
      "Real-World Constraints",
      "Hardware Feasibility",
      "Key Requirements"
    ]
  },
  {
    number: "02",
    phase: "PLAN",
    subtitle: "Choose the right tools and blueprint.",
    description: "I map out the system simply: sketch how data flows, choose the right microcontrollers or frameworks, and design clean database tables.",
    deliverables: [
      "System Architecture Diagram",
      "Database Schema",
      "Component Selection",
      "Step-by-Step Milestones"
    ]
  },
  {
    number: "03",
    phase: "BUILD",
    subtitle: "Write clean code & wire components.",
    description: "I build the solution modularly—writing clear, typed code, creating intuitive interfaces, and testing microcontroller pins and sensor signals.",
    deliverables: [
      "Working Codebase",
      "Hardware Circuitry",
      "Backend & Frontend Integration",
      "Version Controlled Commits"
    ]
  },
  {
    number: "04",
    phase: "TEST",
    subtitle: "Test in real conditions.",
    description: "Nothing works perfectly on the first run. I test hardware under different light and speed conditions, simulate edge cases, and catch bugs before final deployment.",
    deliverables: [
      "Hardware Sensor Testing",
      "Error Catching & Logging",
      "Performance Benchmarks",
      "Reliability Checks"
    ]
  },
  {
    number: "05",
    phase: "REFINE",
    subtitle: "Polish, document, and deploy.",
    description: "Clean up the codebase, document the wiring and setup instructions, and make sure the system runs consistently without manual handholding.",
    deliverables: [
      "Clean Documentation",
      "Working Prototype / Release",
      "Wiring Guide",
      "Ongoing Maintenance Notes"
    ]
  }
];
