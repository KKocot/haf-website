import { useState, useEffect, useRef, useCallback } from "react";
import type { navLinks } from "../../config/links";

interface Props {
  links: typeof navLinks;
  gitlabUrl: string;
}

export default function MobileMenu({ links, gitlabUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Sync active section with desktop navbar via CustomEvent
  useEffect(() => {
    const handler = (e: CustomEvent<{ href: string }>) =>
      setActiveSection(e.detail.href);
    window.addEventListener("section-change", handler as EventListener);
    return () =>
      window.removeEventListener("section-change", handler as EventListener);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="mobile-menu__toggle"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          ref={menuRef}
          aria-label="Mobile navigation"
          className="mobile-menu__nav"
        >
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => close()}
                aria-current={isActive ? "true" : undefined}
                className={`mobile-menu__link${isActive ? " mobile-menu__link--active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="mobile-menu__divider">
            <a
              href={gitlabUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HAF on GitLab"
              className="mobile-menu__gitlab"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M190 353.2L253.3 158.8H126.7L190 353.2Z" fill="#E24329" />
                <path d="M190 353.2L126.7 158.8H24.7L190 353.2Z" fill="#FC6D26" />
                <path d="M24.7 158.8L5.1 219.1C3.3 224.7 5.2 230.8 10 234.3L190 353.2L24.7 158.8Z" fill="#FCA326" />
                <path d="M24.7 158.8H126.7L83.4 25.7C81.4 19.8 73 19.8 71 25.7L24.7 158.8Z" fill="#E24329" />
                <path d="M190 353.2L253.3 158.8H355.3L190 353.2Z" fill="#FC6D26" />
                <path d="M355.3 158.8L374.9 219.1C376.7 224.7 374.8 230.8 370 234.3L190 353.2L355.3 158.8Z" fill="#FCA326" />
                <path d="M355.3 158.8H253.3L296.6 25.7C298.6 19.8 307 19.8 309 25.7L355.3 158.8Z" fill="#E24329" />
              </svg>
              GitLab
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
