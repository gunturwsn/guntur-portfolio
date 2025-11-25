"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = SECTIONS.map((section) => section.href.slice(1));

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>(
    SECTIONS[0]?.href.slice(1) ?? ""
  );
  const ratiosRef = useRef<Record<string, number>>({});
  const activeRef = useRef(activeId);

  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          ratiosRef.current[id] = entry.intersectionRatio;
        });

        const currentActive = activeRef.current || SECTION_IDS[0] || "";
        let bestId = currentActive;
        let bestRatio = ratiosRef.current[currentActive] ?? 0;
        let bestIndex = SECTION_IDS.indexOf(currentActive);

        SECTION_IDS.forEach((id, index) => {
          const ratio = ratiosRef.current[id] ?? 0;
          if (ratio <= 0) return;

          const hasBetterRatio = ratio > bestRatio + 0.001;
          const isTieWithLaterSection =
            Math.abs(ratio - bestRatio) <= 0.001 && index > bestIndex;

          if (hasBetterRatio || isTieWithLaterSection) {
            bestId = id;
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (!bestId) {
          bestId = SECTION_IDS[0] ?? "";
        }
        if (bestId) setActiveId(bestId);
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const sections = document.querySelectorAll<HTMLElement>(
      'section[data-observe="true"]'
    );
    sections.forEach((section) => {
      ratiosRef.current[section.id] = 0;
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      ratiosRef.current = {};
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollBottom = window.scrollY + window.innerHeight;
      const reachedBottom = scrollBottom >= doc.scrollHeight - 2;

      if (reachedBottom) {
        const lastId = SECTION_IDS[SECTION_IDS.length - 1];
        if (lastId && activeRef.current !== lastId) {
          setActiveId(lastId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted lg:mt-10 lg:flex lg:flex-col lg:items-start lg:gap-4">
      {SECTIONS.map(({ href, label }) => {
        const id = href.slice(1);
        const isActive = activeId === id;
        return (
          <a
            key={href}
            href={href}
            onClick={() => setActiveId(id)}
            className={`group flex items-center gap-3 transition ${
              isActive ? "text-text" : "hover:text-text"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-0.5 transition-all duration-300 lg:h-px ${
                isActive
                  ? "w-12 bg-accent lg:w-24"
                  : "w-6 bg-muted/40 group-hover:w-10 group-hover:bg-muted/60 lg:w-12 lg:group-hover:w-16"
              }`}
            />
            <span className="font-medium">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
