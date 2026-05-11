import { useState, useEffect, useRef, useCallback } from "react";
import type { navLinks } from "../../config/links";

interface Props {
  links: typeof navLinks;
}

export default function MobileMenu({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => close()}
              style={{
                display: "block",
                padding: "var(--space-3) var(--space-4)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                transition: "color var(--transition-fast), background-color var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.backgroundColor = "var(--color-bg-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
