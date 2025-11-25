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
  links?: { demo?: string; repo?: string; backend?: string; frontend?: string };
  // opsional nanti: cover?: string
};

export const projects: Project[] = [
  // {
  //   slug: "personal-finance-tracker",
  //   title: "Personal Finance Tracker",
  //   summary: {
  //     problem:
  //       "Needed a reliable transaction ledger and lightweight analytics without vendor lock-in.",
  //     solution:
  //       "Go Fiber backend on PostgreSQL with server-side Excel exports generated directly from SQL queries.",
  //     architecture:
  //       "Modular Clean Architecture with GORM, JWT authentication, Docker Compose orchestration, ready for VPS deployment.",
  //     result:
  //       "Achieved p99 API latency under 120 ms and sub-2-second reporting exports for 50k transaction sets.",
  //   },
  //   stack: ["Go", "Fiber", "PostgreSQL", "GORM", "JWT", "Docker"],
  //   links: { demo: "#", repo: "#" },
  // },
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
    links: { backend: "https://github.com/gunturwsn/qrmenu-backend" },
  },
  {
    slug: "parking-pos",
    title: "PARKING POS",
    summary: {
      problem:
        "An application is needed to record motor vehicles in real time and also check the number of motor vehicles still in the parking lot.",
      solution:
        "Java Spring boot and React.js with TDD concept.",
      architecture:
        "Architectured with clean architecture and dockerized for dev/prod parity.",
      result:
        "Delivered with real-time vehicle tracking and reporting.",
    },
    stack: ["Java", "Spring Boot", "React.js", "Tailwind", "PostgreSQL", "Docker"],
    links: { demo: "#", repo: "#" },
  },
];
