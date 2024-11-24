export type ResumeSchema = {
  $schema: string;
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: {
      countryCode: string;
      address: string;
    };
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  work: WorkEntry[];
  volunteer: VolunteerEntry[];
  education: EducationEntry[];
  awards: AwardsEntry[];
  certificates: CertificatesEntry[];
  publications: unknown[]; // Need to do if want to use
  skills: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
  interests: unknown[]; // Need to do if want to use
  references: unknown[]; // Need to do if want to use
  projects: ProjectEntry[];
  meta: {
    version: string;
    canonical: string;
  };
};

export type ProjectEntry = {
  name: string;
  startDate: string;
  endDate: string;
  summary: string;
  url: string;
};

export type WorkEntry = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  summary?: string;
  url: string;
  location: string;
};

export type VolunteerEntry = {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  url: string;
};

export type EducationEntry = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
};

export type AwardsEntry = {
  title: string;
  date: string;
  awarder: string;
  summary: string;
};

export type CertificatesEntry = {
  name: string;
  issuer: string;
  startDate: string;
  endDate?: string;
  url: string;
};
