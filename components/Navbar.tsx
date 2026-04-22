"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [nationalParksOpen, setNationalParksOpen] = useState(false);

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "28px 34px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
              letterSpacing: "5px",
              fontSize: "19px",
              whiteSpace: "nowrap",
            }}
          >
            SAFARI LUXE
          </Link>

          <nav
            className="desktop-nav"
            style={{
              alignItems: "center",
              gap: "12px",
            }}
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>

            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button style={dropButton}>
                Destinations <span style={{ fontSize: "11px" }}>▼</span>
              </button>

              {destinationsOpen && (
                <div style={dropdownBox}>
                  <DropdownLink href="/destinations">All Destinations</DropdownLink>
                  <DropdownLink href="/destinations/uganda">Uganda</DropdownLink>
                  <DropdownLink href="/destinations/rwanda">Rwanda</DropdownLink>
                  <DropdownLink href="/destinations/kenya">Kenya</DropdownLink>
                </div>
              )}
            </div>

            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setNationalParksOpen(true)}
              onMouseLeave={() => setNationalParksOpen(false)}
            >
              <button style={dropButton}>
                National Parks <span style={{ fontSize: "11px" }}>▼</span>
              </button>

              {nationalParksOpen && (
                <div style={dropdownBox}>
                  <DropdownLink href="/national-parks/uganda">
                    Uganda National Parks
                  </DropdownLink>
                  <DropdownLink href="/national-parks/rwanda">
                    Rwanda National Parks
                  </DropdownLink>
                  <DropdownLink href="/national-parks/kenya">
                    Kenya National Parks
                  </DropdownLink>
                  <DropdownLink href="/national-parks/tanzania">
                    Tanzania National Parks
                  </DropdownLink>
                </div>
              )}
            </div>

            <NavLink href="/contact">Contact</NavLink>

            <Link
              href="/book-now"
              style={{
                background: "#c8a96b",
                color: "#071411",
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: "999px",
                fontWeight: 700,
                marginLeft: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Now
            </Link>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              borderRadius: "12px",
              padding: "10px 12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div
            className="mobile-menu"
            style={{
              marginTop: "14px",
              borderRadius: "18px",
              background: "rgba(8,18,16,0.88)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.10)",
              padding: "16px 18px 20px",
            }}
          >
            <div style={{ display: "grid", gap: "12px" }}>
              <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>
                Home
              </MobileNavLink>

              <MobileNavLink href="/about" onClick={() => setMenuOpen(false)}>
                About
              </MobileNavLink>

              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                style={mobileAccordionButton}
              >
                Destinations {destinationsOpen ? "▲" : "▼"}
              </button>

              {destinationsOpen && (
                <div style={{ display: "grid", gap: "10px", paddingLeft: "10px" }}>
                  <MobileNavLink href="/destinations" onClick={() => setMenuOpen(false)}>
                    All Destinations
                  </MobileNavLink>
                  <MobileNavLink href="/destinations/uganda" onClick={() => setMenuOpen(false)}>
                    Uganda
                  </MobileNavLink>
                  <MobileNavLink href="/destinations/rwanda" onClick={() => setMenuOpen(false)}>
                    Rwanda
                  </MobileNavLink>
                  <MobileNavLink href="/destinations/kenya" onClick={() => setMenuOpen(false)}>
                    Kenya
                  </MobileNavLink>
                </div>
              )}

              <button
                onClick={() => setNationalParksOpen(!nationalParksOpen)}
                style={mobileAccordionButton}
              >
                National Parks {nationalParksOpen ? "▲" : "▼"}
              </button>

              {nationalParksOpen && (
                <div style={{ display: "grid", gap: "10px", paddingLeft: "10px" }}>
                  <MobileNavLink
                    href="/national-parks/uganda"
                    onClick={() => setMenuOpen(false)}
                  >
                    Uganda National Parks
                  </MobileNavLink>
                  <MobileNavLink
                    href="/national-parks/rwanda"
                    onClick={() => setMenuOpen(false)}
                  >
                    Rwanda National Parks
                  </MobileNavLink>
                  <MobileNavLink
                    href="/national-parks/kenya"
                    onClick={() => setMenuOpen(false)}
                  >
                    Kenya National Parks
                  </MobileNavLink>
                  <MobileNavLink
                    href="/national-parks/tanzania"
                    onClick={() => setMenuOpen(false)}
                  >
                    Tanzania National Parks
                  </MobileNavLink>
                </div>
              )}

              <MobileNavLink href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </MobileNavLink>

              <Link
                href="/book-now"
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "#c8a96b",
                  color: "#071411",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  textAlign: "center",
                  marginTop: "6px",
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .desktop-nav {
          display: flex;
        }

        .mobile-menu-button {
          display: none;
        }

        @media (max-width: 980px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-button {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}

const dropButton: React.CSSProperties = {
  color: "white",
  background: "transparent",
  border: "none",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  transition: "all 0.25s ease",
};

const dropdownBox: React.CSSProperties = {
  position: "absolute",
  top: "115%",
  left: 0,
  minWidth: "250px",
  background: "rgba(8,18,16,0.88)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "18px",
  padding: "10px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
};

const mobileAccordionButton: React.CSSProperties = {
  color: "white",
  textAlign: "left",
  padding: "14px 16px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: 600,
  cursor: "pointer",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        color: "white",
        textDecoration: "none",
        padding: "10px 14px",
        borderRadius: "12px",
        fontWeight: 600,
        display: "inline-block",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.78";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </Link>
  );
}

function DropdownLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        color: "white",
        textDecoration: "none",
        padding: "12px 14px",
        borderRadius: "12px",
        fontWeight: 500,
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.paddingLeft = "18px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.paddingLeft = "14px";
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        color: "white",
        textDecoration: "none",
        padding: "14px 16px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontWeight: 600,
      }}
    >
      {children}
    </Link>
  );
}