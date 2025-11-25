import type { Project } from "@/data/projects";

type Props = Project;

export default function ProjectCard({ title, summary, stack, links }: Props) {
  const hasLinks = Boolean(
    links?.demo || links?.repo || links?.backend || links?.frontend
  );

  return (
    <article className="group relative grid gap-5 px-6 py-8 transition duration-300 hover:bg-white/5 md:px-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="h-heading text-xl font-semibold text-white transition group-hover:text-accent sm:text-2xl">
          {title}
        </h3>
        {hasLinks ? (
          <div className="flex items-center gap-4 text-xs uppercase tracking-wide text-muted">
            {links?.demo ? (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                Demo
              </a>
            ) : null}
            {links?.repo ? (
              <a
                href={links.repo}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                Repo
              </a>
            ) : null}
            {links?.backend ? (
              <a
                href={links.backend}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                Repo Backend
              </a>
            ) : null}
            {links?.frontend ? (
              <a
                href={links.frontend}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                Repo Frontend
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
        <p>
          <span className="font-medium text-text/90">Problem:</span>{" "}
          {summary.problem}
        </p>
        <p>
          <span className="font-medium text-text/90">Solution:</span>{" "}
          {summary.solution}
        </p>
        <p>
          <span className="font-medium text-text/90">Architecture:</span>{" "}
          {summary.architecture}
        </p>
        {summary.result ? (
          <p>
            <span className="font-medium text-text/90">Result:</span>{" "}
            {summary.result}
          </p>
        ) : null}
      </div>

      <ul className="flex flex-wrap gap-2 pt-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-muted/40 px-3 py-1 text-xs uppercase tracking-wide text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
