"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function DestinationsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tiltStyles, setTiltStyles] = useState<Record<string, { x: number; y: number; scale: number }>>({});

  const destinations = [
    {
      name: "Uganda",
      link: "/destinations/uganda",
      image: "/images/uganda.jpg",
      text: "Home to gorilla trekking, rich wildlife, lush landscapes, and unforgettable safari adventure.",
    },
    {
      name: "Rwanda",
      link: "/destinations/rwanda",
      image: "/images/rwanda.jpg",
      text: "A refined destination known for premium gorilla trekking, scenic hills, and elegant travel experiences.",
    },
    {
      name: "Kenya",
      link: "/destinations/kenya",
      image: "/images/kenya.jpg",
      text: "Classic African safaris, open plains, big cats, and iconic wildlife encounters.",
    },
  ];

  const handleTiltMove = (
  e: React.MouseEvent<HTMLAnchorElement>,
  cardName: string
) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 8;
  const rotateX = -((y - centerY) / centerY) * 8;

  setTiltStyles((prev) => ({
    ...prev,
    [cardName]: {
      x: rotateX,
      y: rotateY,
      scale: 1.03,
    },
  }));
};

const resetTilt = (cardName: string) => {
  setHoveredCard(null);
  setTiltStyles((prev) => ({
    ...prev,
    [cardName]: {
      x: 0,
      y: 0,
      scale: 1,
    },
  }));
};

  const stats = [
    { number: "3", label: "Featured Destinations" },
    { number: "Luxury", label: "Travel Positioning" },
    { number: "Wildlife", label: "Adventure Focus" },
    { number: "East Africa", label: "Regional Expertise" },
  ];

  return (
    <>
      <Navbar />

      <main className="destinations-page">
        <section className="hero-section">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Explore East Africa</p>
                <h1 className="hero-title">
                  Destinations Designed for Exceptional Safari Experiences
                </h1>
                <p className="hero-text">
                  Explore handpicked East African destinations known for gorilla trekking,
                  rich wildlife, dramatic scenery, and premium travel experiences tailored
                  to different kinds of adventurers.
                </p>
              </div>
            </Reveal>

            <div className="stats-grid">
              {stats.map((item, index) => (
                <Reveal key={item.label} delay={0.05 * index}>
                  <div className="stat-card">
                    <div className="stat-number">{item.number}</div>
                    <p className="stat-label">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cards-section">
          <div className="container">
            <Reveal>
              <div className="cards-head">
                <p className="eyebrow">All Destinations</p>
                <h2 className="section-title">Choose Your Safari Starting Point</h2>
                <p className="section-text">
                  Each destination offers its own mood, scenery, and safari character.
                  Explore the one that fits your travel style best.
                </p>
              </div>
            </Reveal>

            <div className="cards-grid">
              {destinations.map((place, index) => {
                const isHovered = hoveredCard === place.name;

                return (
                  <Reveal key={place.name} delay={0.08 * index}>
                    <Link
  key={place.name}
  href={place.link}
  onMouseEnter={() => setHoveredCard(place.name)}
  onMouseMove={(e) => handleTiltMove(e, place.name)}
  onMouseLeave={() => resetTilt(place.name)}
  className={`destination-card ${isHovered ? "destination-card-hover" : ""}`}
  style={{
    transform: `perspective(1200px) rotateX(${(tiltStyles[place.name]?.x ?? 0)}deg) rotateY(${(tiltStyles[place.name]?.y ?? 0)}deg) scale(${(tiltStyles[place.name]?.scale ?? 1)})`,
    boxShadow: isHovered
      ? "0 30px 60px rgba(0,0,0,0.35)"
      : "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
                      <div className="card-image-wrapper">
                        <div className="card-image-wrapper">
  <div
    className="card-image"
    style={{
      backgroundImage: `linear-gradient(rgba(7,20,17,0.12), rgba(7,20,17,0.35)), url('${place.image}')`,
      transform: isHovered ? "scale(1.08)" : "scale(1)",
    }}
  />
  <div
    className="shine"
    style={{
      opacity: isHovered ? 1 : 0,
    }}
  />
</div>
                      </div>

                      <div className="card-body">
                        <h3 className="card-title">{place.name}</h3>
                        <p className="card-text">{place.text}</p>

                        <div className={`card-pill ${isHovered ? "card-pill-hover" : ""}`}>
                          Explore {place.name}
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <Reveal>
              <div className="cta-panel">
                <p className="eyebrow">Need Help Choosing?</p>
                <h2 className="cta-title">
                  Let’s Match You With the Right Safari Destination
                </h2>
                <p className="cta-text">
                  Whether you want gorilla trekking, luxury escapes, wildlife photography,
                  or classic savannah adventure, we can help you choose the destination
                  that fits your travel style.
                </p>

                <div className="cta-actions">
                  <Link href="/book-now" className="btn btn-primary">
                    Start Planning
                  </Link>

                  <Link href="/contact" className="btn btn-secondary">
                    Talk to Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .destinations-page {
          min-height: 100vh;
          background: radial-gradient(circle at top, rgba(200, 169, 107, 0.1), transparent 28%), #071411;
          color: white;
          font-family: Arial, sans-serif;
        }

        .container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero-section {
          padding: 140px 0 70px;
        }

        .section-head,
        .cards-head {
          margin-bottom: 34px;
        }

        .eyebrow {
          color: #c8a96b;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(38px, 6vw, 60px);
          line-height: 1.08;
          margin: 0 0 20px;
          max-width: 860px;
        }

        .hero-text,
        .section-text,
        .cta-text {
          max-width: 860px;
          font-size: 20px;
          line-height: 1.9;
          color: #d6d3d1;
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #d6d3d1;
          line-height: 1.7;
          margin: 0;
        }

        .cards-section {
          padding: 10px 0 100px;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
          margin: 0 0 18px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .destination-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  color: white;
  text-decoration: none;
  display: block;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  transform-style: preserve-3d;
  will-change: transform;
}

.card-image-wrapper {
  position: relative;
  height: 240px;
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.card-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.45s ease;
}

.shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.12) 45%,
    rgba(255, 255, 255, 0) 70%
  );
  transition: opacity 0.3s ease;
  pointer-events: none;
}

        .destination-card-hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.32);
        }

        .card-image-wrapper {
          height: 240px;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          overflow: hidden;
        }

        .card-image {
          height: 100%;
          width: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .card-body {
          padding: 26px;
        }

        .card-body {
  padding: 26px;
  transform: translateZ(30px);
}

        .card-text {
          color: #d6d3d1;
          line-height: 1.85;
          margin: 0 0 20px;
        }

        .card-pill {
          display: inline-block;
          background: #c8a96b;
          color: #071411;
          padding: 11px 18px;
          border-radius: 999px;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .card-pill-hover {
          transform: scale(1.04);
          background: #d5b57a;
        }

        .cta-section {
          padding: 0 0 100px;
        }

        .cta-panel {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 42px;
          backdrop-filter: blur(12px);
        }

        .cta-title {
          font-size: clamp(32px, 5vw, 42px);
          line-height: 1.12;
          margin: 0 0 18px;
          max-width: 900px;
        }

        .cta-text {
          margin-bottom: 28px;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          padding: 15px 28px;
          border-radius: 999px;
          font-weight: bold;
        }

        .btn-primary {
          background: #c8a96b;
          color: #071411;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 1100px) {
          .stats-grid,
          .cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 820px) {
          .hero-section {
            padding: 120px 0 60px;

            .destination-card {
  transform: none !important;
}
          }

          .stats-grid,
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .cta-panel {
            padding: 24px;
          }
        }

        @media (max-width: 520px) {
          .container {
            width: min(1200px, calc(100% - 24px));
          }

          .card-title {
            font-size: 28px;
          }

          .card-image-wrapper {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}