import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:gunturw79@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        <path d="m4 8 7.6 5a1 1 0 0 0 1.1 0L20 8" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/gunturwsn",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.623 2 12.262c0 4.513 2.865 8.338 6.839 9.695.5.097.683-.225.683-.5 0-.247-.01-1.067-.015-1.937-2.782.617-3.37-1.224-3.37-1.224-.455-1.182-1.11-1.497-1.11-1.497-.908-.64.07-.627.07-.627 1.004.072 1.532 1.05 1.532 1.05.893 1.571 2.343 1.117 2.913.855.092-.662.35-1.118.636-1.375-2.22-.26-4.555-1.144-4.555-5.09 0-1.125.389-2.045 1.028-2.766-.103-.26-.446-1.307.098-2.726 0 0 .84-.273 2.75 1.057A9.342 9.342 0 0 1 12 6.844c.851.004 1.707.116 2.507.34 1.91-1.33 2.748-1.057 2.748-1.057.546 1.42.202 2.467.1 2.726.64.721 1.027 1.641 1.027 2.766 0 3.958-2.339 4.827-4.566 5.082.36.322.681.957.681 1.929 0 1.394-.013 2.517-.013 2.861 0 .277.18.602.688.5C19.138 20.594 22 16.773 22 12.262 22 6.623 17.523 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guntur-wicaksono",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.982 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h3.965V21H3V9Zm7.148 0H14V11h.053c.43-.818 1.488-1.681 3.064-1.681C20.43 9.319 21 11.48 21 14.256V21h-3.965v-6.174c0-1.476-.028-3.373-2.054-3.373-2.057 0-2.372 1.607-2.372 3.261V21H8.644V9h1.504Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/gunturwsn",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.356 3H20l-7.57 8.68L20 21h-7.168l-4.7-5.535L2.966 21H1l7.936-9.113L2 3h7.245l4.2 5 2.911-5Z" />
      </svg>
    ),
  },
] as const;

export default function HomePage() {
  return (
    <main
      id="top"
      className="relative isolate bg-gradient-to-b from-bg via-bg/95 to-black/60"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[34rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl md:w-[44rem]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-10 pt-8 sm:pt-10 md:px-10 lg:flex-row lg:gap-20">
        <div className="w-full lg:w-[320px] lg:flex-none">
          <aside className="sticky top-12 hidden lg:flex lg:h-[calc(100vh-6rem)] lg:flex-col lg:justify-between lg:py-8">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                Software Engineer
              </p>
              <h1 className="h-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Guntur Wicaksono
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Backend-first engineer focused on reliable systems and
                thoughtful product experiences. I currently lead the platform at{" "}
                <span className="text-text">QrMenu</span>, keeping payments and
                kitchen ops fast for restaurants across Indonesia.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <SidebarNav />
              <div className="flex flex-wrap gap-4 text-muted">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Software Engineer
            </p>
            <h1 className="h-heading text-4xl font-semibold tracking-tight text-white">
              Guntur Wicaksono
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Backend-first engineer focused on reliable systems and thoughtful
              product experiences. I currently lead the platform at{" "}
              <span className="text-text">QrMenu</span>, keeping payments and
              kitchen ops fast for restaurants across Indonesia.
            </p>
            <SidebarNav />
            <div className="flex flex-wrap gap-4 text-muted">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-20 lg:mt-0 lg:flex-1 lg:space-y-28">
          <section id="about" data-observe="true" className="scroll-mt-24">
            <header className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent/60" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
                About
              </h2>
            </header>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Software Engineer with 5 years of experience building scalable
                backend and full-stack applications using Java (Spring MVC), Go,
                Python (Django), and JavaScript/TypeScript (Node.js, NestJS,
                Vue, React). Focused on delivering maintainable and high-quality
                solutions through clean architecture principles, code
                excellence, and effective team collaboration.
              </p>
            </div>
          </section>

          <section id="experience" data-observe="true" className="scroll-mt-24">
            <header className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent/60" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
                Experience
              </h2>
            </header>

            <ol className="mt-6 space-y-12">
              {experiences.map((experience) => (
                <li
                  key={experience.company}
                  className="relative flex flex-col gap-4 sm:flex-row sm:gap-6"
                >
                  <div className="sm:flex sm:w-24 sm:flex-none sm:justify-end sm:pr-2 sm:text-right">
                    <span className="text-xs uppercase tracking-wide text-muted/70">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex-1 space-y-3 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/40 hover:bg-white/10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="h-heading text-xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <div className="text-sm text-muted">
                          {experience.href ? (
                            <a
                              href={experience.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition hover:text-accent"
                            >
                              {experience.company}
                            </a>
                          ) : (
                            experience.company
                          )}
                          {experience.location
                            ? ` · ${experience.location}`
                            : ""}
                        </div>
                      </div>
                      {experience.stack ? (
                        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted">
                          {experience.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-muted/40 px-3 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <ul className="space-y-2 text-sm leading-relaxed text-muted">
                      {experience.summary.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" data-observe="true" className="scroll-mt-24">
            <header className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent/60" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
                Projects
              </h2>
            </header>

            <div className="mt-6 divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/5">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>

          <section
            id="contact"
            data-observe="true"
            className="scroll-mt-24 pb-6"
          >
            <header className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent/60" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
                Contact
              </h2>
            </header>
            <div className="mt-6 space-y-4">
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Want to collaborate or need help getting your platform in shape?
                I&apos;m always open to new challenges, consulting, and pairing
                sessions with teams who care about shipping quality software.
              </p>
              <a
                href="mailto:gunturw79@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/40 px-6 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              >
                Say hello
                <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </section>

          <div className="mt-24 border-t border-white/10 pt-10">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
