export type Project = {
  slug: string;
  title: string;
  summary: {
    problem: string;
    solution: string;
    architecture: string;
    result?: string; // opsional
  };
  stack: string[];
  links?: { demo?: string; repo?: string };
  // opsional nanti: cover?: string
};

export const projects: Project[] = [
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    summary: {
      problem:
        "Needed a reliable transaction ledger and lightweight analytics without vendor lock-in.",
      solution:
        "Go Fiber backend on PostgreSQL with server-side Excel exports generated directly from SQL queries.",
      architecture:
        "Modular Clean Architecture with GORM, JWT authentication, Docker Compose orchestration, ready for VPS deployment.",
      result:
        "Achieved p99 API latency under 120 ms and sub-2-second reporting exports for 50k transaction sets.",
    },
    stack: ["Go", "Fiber", "PostgreSQL", "GORM", "JWT", "Docker"],
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "qrmenu",
    title: "QRMenu (Multi-tenant)",
    summary: {
      problem:
        "Restaurants required a lightweight QR menu experience with rapid updates and true multi-tenant isolation.",
      solution:
        "Go Fiber API paired with a Next.js client, backed by Redis caching for menu data and real-time availability.",
      architecture:
        "Tenant-aware routing, streamlined RBAC, Redis-backed caching, and GitHub Actions CI/CD pipelines.",
      result:
        "Delivered sub-200 ms TTFB with an ~80% cache hit rate across high-traffic menu listings.",
    },
    stack: ["Go", "Fiber", "Redis", "Next.js", "Tailwind", "Docker"],
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "hera-hris",
    title: "HERA HRIS",
    summary: {
      problem:
        "Enterprise HR teams needed a stable HRIS platform with granular access controls.",
      solution:
        "Spring Boot service secured with JWT, implementing RBAC with per-user overrides and Flyway-managed migrations.",
      architecture:
        "Hexagonal layered design on PostgreSQL with Actuator-driven observability and Dockerized dev/prod parity.",
      result:
        "Cut leave-approval turnaround by 35% while keeping UAT error rates below 0.2%.",
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "JWT", "Docker"],
    links: { demo: "#", repo: "#" },
  },
];
