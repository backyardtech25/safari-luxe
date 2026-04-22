"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-eyebrow">Safari Luxe</p>

            <h2 className="footer-logo">Crafted East African Journeys</h2>

            <p className="footer-text">
              Premium safari experiences designed with cinematic beauty,
              refined comfort, and unforgettable wildlife moments across
              East Africa.
            </p>

            <div className="footer-badges">
              <span>Luxury Travel</span>
              <span>Wildlife Safaris</span>
              <span>Gorilla Trekking</span>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <div className="footer-links-list">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/destinations">Destinations</Link>
                <Link href="/national-parks/uganda">National Parks</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="footer-column">
              <h3>Top Destinations</h3>
              <div className="footer-links-list">
                <Link href="/destinations/uganda">Uganda</Link>
                <Link href="/destinations/rwanda">Rwanda</Link>
                <Link href="/destinations/kenya">Kenya</Link>
                <Link href="/national-parks/tanzania">Tanzania</Link>
              </div>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>
              <div className="footer-links-list">
                <a href="mailto:info@safariluxe.com">info@safariluxe.com</a>
                <a href="tel:+256700000000">+256 700 000 000</a>
                <span>Kampala, Uganda</span>
                <span>Open Daily</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Safari Luxe. All rights reserved.</p>

          <div className="footer-mini-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Bookings</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(200, 169, 107, 0.12), transparent 28%),
            radial-gradient(circle at bottom right, rgba(200, 169, 107, 0.08), transparent 25%),
            linear-gradient(180deg, #061310 0%, #04100d 100%);
          color: white;
          padding: 90px 24px 34px;
        }

        .footer-shell {
          max-width: 1320px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 34px;
          padding: 46px 42px 24px;
          backdrop-filter: blur(14px);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 54px;
          align-items: start;
        }

        .footer-eyebrow {
          margin: 0 0 14px;
          color: #c8a96b;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 800;
        }

        .footer-logo {
          margin: 0 0 18px;
          font-size: clamp(36px, 4vw, 58px);
          line-height: 1;
          letter-spacing: -1.5px;
          max-width: 560px;
        }

        .footer-text {
          margin: 0;
          max-width: 520px;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.95;
          font-size: 17px;
        }

        .footer-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .footer-badges span {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .footer-column h3 {
          margin: 0 0 18px;
          font-size: 18px;
          color: white;
          letter-spacing: 0.2px;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .footer-links-list a,
        .footer-links-list span {
          display: block;
          width: 100%;
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          font-size: 16px;
          line-height: 1.5;
          transition: all 0.25s ease;
          word-break: break-word;
        }

        .footer-links-list a:hover {
          color: #c8a96b;
          transform: translateX(5px);
        }

        .footer-bottom {
          margin-top: 38px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 14px;
        }

        .footer-mini-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-mini-links span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.58);
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 980px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 64px 16px 24px;
          }

          .footer-shell {
            padding: 30px 22px 20px;
            border-radius: 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .footer-logo {
            font-size: 36px;
          }

          .footer-text {
            font-size: 16px;
          }

          .footer-badges {
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}