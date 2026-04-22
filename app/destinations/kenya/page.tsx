"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KenyaPage() {
  const highlights = [
    "Classic wildlife and big-cat safaris",
    "Open plains and dramatic scenic views",
    "Iconic reserves and timeless safari moments",
    "Strong photography and adventure appeal",
  ];

  const stats = [
    { number: "Classic", label: "Big Safari Identity" },
    { number: "Wildlife", label: "Photography & Adventure Focus" },
    { number: "Savannah", label: "Open Landscape Appeal" },
    { number: "Kenya", label: "Iconic Safari Reputation" },
  ];

  return (
    <>
      <Navbar />

      <main className="detail-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Destination</p>
            <h1 className="hero-title">Kenya</h1>
            <p className="hero-text">
              The home of classic African safari experiences, open plains, iconic wildlife,
              and unforgettable photographic moments.
            </p>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <div className="stat-number">{item.number}</div>
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container two-col">
            <div className="content-card">
              <p className="eyebrow">Why Visit Kenya</p>
              <h2 className="section-title">
                A timeless safari destination shaped by wildlife, scale, and cinematic beauty.
              </h2>
              <p className="body-text">
                Kenya delivers the classic safari dream with rich wildlife, dramatic open
                landscapes, and some of Africa’s most iconic game experiences. It feels bold,
                photogenic, and deeply connected to the timeless safari image many travelers imagine.
              </p>
              <p className="body-text">
                It is ideal for travelers looking for big scenery, wildlife drama, and
                an unforgettable East African adventure with strong visual impact.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="side-title">Top Highlights</h3>
              <div className="highlight-list">
                {highlights.map((item) => (
                  <div key={item} className="highlight-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-panel">
              <p className="eyebrow">Plan Kenya</p>
              <h2 className="cta-title">Let’s Build Your Kenya Safari Adventure</h2>
              <p className="cta-text">
                From classic wildlife journeys to dramatic photographic adventures, we can
                help you plan a Kenya experience that feels powerful, beautiful, and premium.
              </p>

              <div className="cta-actions">
                <Link href="/book-now" className="btn btn-primary">
                  Start Planning
                </Link>

                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .detail-page {
          min-height: 100vh;
          background: radial-gradient(circle at top, rgba(200, 169, 107, 0.1), transparent 28%), #071411;
          color: white;
          font-family: Arial, sans-serif;
        }

        .container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          min-height: 78vh;
          display: flex;
          align-items: center;
          padding: 120px 0 60px;
          background-image:
            linear-gradient(rgba(7, 20, 17, 0.4), rgba(7, 20, 17, 0.82)),
            url("/images/kenya.jpg");
          background-size: cover;
          background-position: center;
        }

        .eyebrow {
          color: #c8a96b;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(42px, 7vw, 68px);
          line-height: 1.02;
          margin: 0 0 22px;
          max-width: 760px;
        }

        .hero-text {
          font-size: 22px;
          line-height: 1.9;
          color: #e7e5e4;
          max-width: 760px;
          margin: 0;
        }

        .stats-section {
          padding: 70px 0 40px;
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

        .content-section {
          padding: 50px 0 90px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: start;
        }

        .content-card,
        .glass-card,
        .cta-panel {
          border-radius: 30px;
          padding: 34px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-card,
        .cta-panel {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }

        .section-title {
          font-size: clamp(30px, 5vw, 42px);
          line-height: 1.12;
          margin: 0 0 18px;
        }

        .body-text {
          color: #d6d3d1;
          line-height: 1.95;
          font-size: 18px;
          margin: 0 0 22px;
        }

        .body-text:last-child {
          margin-bottom: 0;
        }

        .side-title {
          font-size: 30px;
          margin: 0 0 20px;
        }

        .highlight-list {
          display: grid;
          gap: 16px;
        }

        .highlight-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 18px 20px;
          color: #e7e5e4;
          line-height: 1.7;
        }

        .cta-section {
          padding: 0 0 100px;
        }

        .cta-title {
          font-size: clamp(30px, 5vw, 42px);
          line-height: 1.12;
          margin: 0 0 18px;
          max-width: 900px;
        }

        .cta-text {
          color: #d6d3d1;
          line-height: 1.9;
          font-size: 18px;
          max-width: 860px;
          margin: 0 0 28px;
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
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .two-col {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 820px) {
          .hero {
            min-height: auto;
            padding: 110px 0 60px;
          }

          .hero-text {
            font-size: 18px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .content-card,
          .glass-card,
          .cta-panel {
            padding: 24px;
          }
        }

        @media (max-width: 520px) {
          .container {
            width: min(1200px, calc(100% - 24px));
          }
        }
      `}</style>
    </>
  );
}