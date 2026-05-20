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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2.75rem",
          height: "2.75rem",
          padding: 0,
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          backgroundColor: "transparent",
          color: "var(--color-text-muted)",
          cursor: "pointer",
          transition: "color var(--transition-fast), border-color var(--transition-fast)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-text)";
          e.currentTarget.style.borderColor = "var(--color-border-bright)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-text-muted)";
          e.currentTarget.style.borderColor = "var(--color-border)";
        }}
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
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--color-bg-elevated)",
            borderBottom: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
            padding: "var(--space-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
          }}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => close()}
                aria-current={isActive ? "true" : undefined}
                style={{
                  display: "block",
                  padding: "var(--space-3) var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)",
                  textDecoration: "none",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  transition:
                    "color var(--transition-fast), background-color var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text)";
                  e.currentTarget.style.backgroundColor =
                    "var(--color-bg-surface-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            );
          })}

          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              marginTop: "var(--space-2)",
              paddingTop: "var(--space-2)",
            }}
          >
            <a
              href={gitlabUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HAF on GitLab"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-4)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                transition:
                  "color var(--transition-fast), background-color var(--transition-fast), transform 0.2s ease, filter 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.backgroundColor =
                  "var(--color-bg-surface-hover)";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 6px rgba(252, 109, 38, 0.5))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "none";
              }}
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
