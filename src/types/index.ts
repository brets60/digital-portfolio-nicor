export type ProjectCategory = 'ALL' | 'SYSTEMS' | 'WEB' | 'AI' | 'IOT';

export interface ProjectLink {
  label: string;
  url?: string;
  type: 'github' | 'demo' | 'case-study';
  statusNote?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  category: 'input' | 'processing' | 'database' | 'output' | 'ai';
}

export interface CaseStudyData {
  overview: string;
  problem: {
    title: string;
    points: string[];
  };
  idea: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    highlights: string[];
  };
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  technology: {
    stack: {
      category: string;
      tools: string[];
    }[];
    rationale: string;
  };
  keyFeatures: {
    title: string;
    detail: string;
  }[];
  result: {
    outcome: string;
    learnings: string[];
  };
  architecture: {
    nodes: ArchitectureNode[];
    pipeline: string[];
  };
  links: ProjectLink[];
  simulatorType?: 'speed-radar' | 'laundry-pipeline' | 'ai-skills';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'SYSTEMS' | 'WEB' | 'AI' | 'IOT';
  categoryLabel: string;
  year: string;
  tagline: string;
  shortDescription: string;
  technologies: string[];
  featuredImage: string;
  caseStudy: CaseStudyData;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  summary: string;
  deepDive: string;
  technologies: string[];
  architectures: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  level: string;
  note?: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: TechItem[];
}

export interface PersonalValue {
  number: string;
  title: string;
  statement: string;
  description: string;
}

export interface ExploreArea {
  tag: string;
  title: string;
  description: string;
  currentStudy: string;
}
