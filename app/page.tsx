"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slides = [
  {
    id: 1,
    title: "UGANDA",
    subtitle: "The pearl of premium gorilla and wildlife journeys",
    image: "/images/uganda.jpg",
    thumb: "/images/uganda.jpg",
    link: "/destinations/uganda",
  },
  {
    id: 2,
    title: "RWANDA",
    subtitle: "Refined luxury escapes and unforgettable gorilla trekking",
    image: "/images/rwanda.jpg",
    thumb: "/images/rwanda.jpg",
    link: "/destinations/rwanda",
  },
  {
    id: 3,
    title: "KENYA",
    subtitle: "Classic safari beauty with a cinematic modern feel",
    image: "/images/kenya.jpg",
    thumb: "/images/kenya.jpg",
    link: "/destinations/kenya",
  },
  {
    id: 4,
    title: "TANZANIA",
    subtitle: "Endless plains, iconic wildlife, and timeless adventure",
    image: "/images/tanzania.jpg",
    thumb: "/images/tanzania.jpg",
    link: "/national-parks/tanzania",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[current];
  const previewSlides = slides.filter((_, index) => index !== current).slice(0, 2);

  return (
    <>
      <main className="homepage">
        <section
          className="hero"
          style={{
            backgroundImage: `url('${activeSlide.image}')`,
          }}
        >
          <div className="page-blur-bg" />

          <div className="hero-frame">
            <div
              className="hero-main-image"
              style={{
                backgroundImage: `linear-gradient(rgba(5,10,18,0.10), rgba(5,10,18,0.24)), url('${activeSlide.image}')`,
              }}
            >
              <div className="hero-dark-overlay" />

              <Navbar />

              <div className="hero-content">
                <div className="left-previews">
                  <button
                    className="arrow-btn"
                    onClick={goPrev}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>

                  {previewSlides.map((slide) => (
                    <button
                      key={slide.id}
                      className="preview-card"
                      onClick={() =>
                        setCurrent(slides.findIndex((s) => s.id === slide.id))
                      }
                      aria-label={`Show ${slide.title}`}
                    >
                      <div
                        className="preview-image"
                        style={{ backgroundImage: `url('${slide.thumb}')` }}
                      />
                      <div className="preview-info">
                        <span className="preview-name">{slide.title}</span>
                        <span className="preview-small">View destination</span>
                      </div>
                    </button>
                  ))}

                  <button
                    className="arrow-btn"
                    onClick={goNext}
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>

                <div className="hero-text-block">
                  <h1 className="hero-title">{activeSlide.title}</h1>
                  <p className="hero-subtitle">{activeSlide.subtitle}</p>
                </div>

                <Link href={activeSlide.link} className="book-now-small">
                  Explore
                </Link>

                <div className="bottom-ui">
                  <div className="dots">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`dot ${current === index ? "dot-active" : ""}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="slide-count">
                    <span>{String(current + 1).padStart(2, "0")}</span>
                    <span className="divider">/</span>
                    <span>{String(slides.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="after-hero">
          <div className="after-hero-glow after-hero-glow-1" />
          <div className="after-hero-glow after-hero-glow-2" />

          <div className="content-shell">
            <div className="section-heading modern-heading">
              <p className="section-label">Premium East African Escapes</p>
              <h2>Curated journeys crafted for unforgettable moments.</h2>
              <p>
                Explore gorilla trekking, luxury stays, scenic destinations, and
                modern safari experiences designed with elegance, comfort, and
                cinematic storytelling in mind.
              </p>
            </div>

            <div className="feature-grid modern-feature-grid">
              <div className="feature-card modern-feature-card">
                <div className="feature-icon">01</div>
                <h3>Luxury Lodges</h3>
                <p>
                  Exceptional stays with premium comfort, elevated design, and
                  unforgettable atmosphere in nature.
                </p>
              </div>

              <div className="feature-card modern-feature-card">
                <div className="feature-icon">02</div>
                <h3>Wildlife Journeys</h3>
                <p>
                  Carefully planned safari experiences through iconic East African
                  landscapes and rich wildlife settings.
                </p>
              </div>

              <div className="feature-card modern-feature-card">
                <div className="feature-icon">03</div>
                <h3>Private Planning</h3>
                <p>
                  Tailor-made safari packages for couples, families, and groups who
                  want a refined travel experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
        .homepage {
          min-height: 100vh;
          background: #08131a;
          color: white;
          font-family: Arial, sans-serif;
        }

        .hero {
          height: 100vh;
          padding: 18px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .page-blur-bg {
          position: absolute;
          inset: 0;
          background-image: inherit;
          background-size: cover;
          background-position: center;
          filter: blur(16px) saturate(0.95);
          transform: scale(1.08);
          opacity: 0.55;
          pointer-events: none;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 12, 20, 0.10),
            rgba(6, 12, 20, 0.18)
          );
          pointer-events: none;
        }

        .hero-frame {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }

        .hero-main-image {
          position: relative;
          width: 100%;
          height: calc(100vh - 36px);
          border-radius: 28px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .hero-main-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.10),
            rgba(255, 255, 255, 0.03) 45%,
            rgba(255, 255, 255, 0.02)
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(4, 10, 18, 0.08) 0%,
            rgba(4, 10, 18, 0.10) 40%,
            rgba(4, 10, 18, 0.26) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 150px 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .left-previews {
          position: absolute;
          left: 28px;
          top: 54%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 4;
        }

        .arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: none;
          background: rgba(255, 255, 255, 0.14);
          color: white;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .arrow-btn:hover {
          transform: scale(1.06);
          background: rgba(255, 255, 255, 0.2);
        }

        .preview-card {
          width: 110px;
          height: 210px;
          border-radius: 22px;
          overflow: hidden;
          position: relative;
          display: block;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.20);
          padding: 0;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .preview-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 30px rgba(0, 0, 0, 0.24);
        }

        .preview-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .preview-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.03),
            rgba(0, 0, 0, 0.18) 45%,
            rgba(0, 0, 0, 0.64)
          );
        }

        .preview-info {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 12px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .preview-name {
          font-size: 11px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.4px;
        }

        .preview-small {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-text-block {
          text-align: center;
          margin-top: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 40px;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(70px, 9vw, 136px);
          font-weight: 300;
          letter-spacing: 6px;
          line-height: 0.95;
          color: rgba(255, 255, 255, 0.94);
          text-transform: uppercase;
          text-align: center;
          text-shadow: 0 6px 28px rgba(0, 0, 0, 0.22);
        }

        .hero-subtitle {
          margin: 12px 0 0;
          font-size: clamp(22px, 2vw, 34px);
          letter-spacing: 6px;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 300;
          text-align: center;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
        }

        .bottom-ui {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: auto;
        }

        .dots {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .dot:hover {
          transform: scale(1.18);
        }

        .dot-active {
          background: white;
        }

        .slide-count {
          position: absolute;
          right: 32px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 34px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.95);
        }

        .divider {
          opacity: 0.7;
        }

        .book-now-small {
          position: absolute;
          left: 40px;
          bottom: 30px;
          text-decoration: none;
          color: white;
          background: transparent;
          padding: 0;
          border-radius: 0;
          font-size: 18px;
          font-weight: 600;
          z-index: 4;
          transition: all 0.25s ease;
        }

        .book-now-small:hover {
          opacity: 0.78;
          transform: translateY(-2px);
        }

        .after-hero {
          position: relative;
          overflow: hidden;
          padding: 100px 24px 110px;
          background:
            radial-gradient(circle at 15% 10%, rgba(200,169,107,0.14), transparent 22%),
            radial-gradient(circle at 85% 20%, rgba(255,255,255,0.05), transparent 18%),
            linear-gradient(180deg, #091713 0%, #07120f 45%, #06100d 100%);
        }

        .after-hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.45;
        }

        .after-hero-glow-1 {
          width: 320px;
          height: 320px;
          background: rgba(200,169,107,0.14);
          top: -40px;
          left: -60px;
        }

        .after-hero-glow-2 {
          width: 280px;
          height: 280px;
          background: rgba(255,255,255,0.06);
          right: -40px;
          bottom: 20px;
        }

        .content-shell {
          position: relative;
          z-index: 2;
          max-width: 1320px;
          margin: 0 auto;
        }

        .modern-heading {
          max-width: 900px;
          margin-bottom: 48px;
        }

        .section-label {
          font-size: 12px;
          color: #d4b06a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 800;
        }

        .section-heading h2 {
          margin: 0 0 22px;
          font-size: clamp(42px, 5vw, 76px);
          line-height: 0.96;
          color: #f8fafc;
          letter-spacing: -2px;
          max-width: 940px;
        }

        .section-heading p {
          margin: 0;
          font-size: 19px;
          line-height: 1.95;
          color: rgba(255,255,255,0.72);
          max-width: 780px;
        }

        .modern-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .modern-feature-card {
          position: relative;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 30px;
          padding: 30px;
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          overflow: hidden;
        }

        .modern-feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.10),
            rgba(255,255,255,0.03) 45%,
            rgba(255,255,255,0.01)
          );
          pointer-events: none;
        }

        .modern-feature-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 28px 54px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255,255,255,0.08);
          border-color: rgba(212,176,106,0.26);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #d8bc84, #b99652);
          color: #071411;
          font-weight: 800;
          font-size: 16px;
          margin-bottom: 24px;
          box-shadow: 0 12px 24px rgba(185,150,82,0.24);
          position: relative;
          z-index: 1;
        }

        .feature-card h3 {
          position: relative;
          z-index: 1;
          margin: 0 0 14px;
          font-size: 30px;
          color: #ffffff;
          letter-spacing: -0.8px;
        }

        .feature-card p {
          position: relative;
          z-index: 1;
          margin: 0;
          color: rgba(255,255,255,0.74);
          line-height: 1.9;
          font-size: 17px;
        }

        @media (max-width: 980px) {
          .left-previews {
            display: none;
          }

          .modern-feature-grid {
            grid-template-columns: 1fr;
          }

          .hero-content {
            padding: 130px 20px 24px;
          }

          .slide-count {
            right: 18px;
            font-size: 24px;
          }

          .section-heading h2 {
            font-size: 52px;
          }
        }

        @media (max-width: 760px) {
          .hero {
            height: 100svh;
            padding: 12px;
          }

          .hero-main-image {
            height: calc(100svh - 24px);
            border-radius: 22px;
          }

          .hero-content {
            padding: 120px 16px 20px;
          }

          .hero-text-block {
            margin-top: 110px;
            padding: 0 12px;
          }

          .hero-title {
            font-size: clamp(42px, 12vw, 78px);
            letter-spacing: 3px;
          }

          .hero-subtitle {
            font-size: 18px;
            letter-spacing: 4px;
          }

          .book-now-small {
            left: 18px;
            bottom: 18px;
            font-size: 16px;
          }

          .after-hero {
            padding: 74px 16px 82px;
          }

          .modern-feature-card {
            padding: 24px;
            border-radius: 24px;
          }

          .section-heading h2 {
            font-size: 40px;
            letter-spacing: -1px;
          }

          .section-heading p,
          .feature-card p {
            font-size: 16px;
          }

          .feature-card h3 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}