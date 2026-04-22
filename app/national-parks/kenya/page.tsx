"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KenyaNationalParksPage() {
  const parks = [
    "Maasai Mara National Reserve",
    "Amboseli National Park",
    "Tsavo East National Park",
    "Tsavo West National Park",
    "Lake Nakuru National Park",
    "Nairobi National Park",
    "Samburu National Reserve",
    "Aberdare National Park",
    "Mount Kenya National Park",
    "Meru National Park",
    "Hell’s Gate National Park",
    "Lake Naivasha Region",
    "Shimba Hills National Reserve",
    "Ol Pejeta Conservancy",
    "Lewa Wildlife Conservancy",
  ];

  return (
    <>
      <Navbar />

      <main className="parks-page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">National Parks</p>
            <h1 className="hero-title">Kenya National Parks</h1>
            <p className="hero-text">
              Explore Kenya’s iconic wildlife reserves, open savannah landscapes,
              and classic safari destinations in a premium modern gallery.
            </p>
          </div>
        </section>

        <section className="parks-section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Luxury Nature Collection</p>
              <h2 className="section-title">Premium Park Gallery</h2>
              <p className="section-text">
                Hover over each destination to discover Kenya’s most iconic safari landscapes and reserves.
              </p>
            </div>

            <div className="parks-grid">
              {parks.map((park, index) => (
                <div key={park} className="park-card">
                  <div
                    className="park-image"
                    style={{
                      backgroundImage: `url('/images/national-parks/kenya/${index + 1}.jpg')`,
                    }}
                  >
                    <div className="overlay">
                      <h3 className="park-title">{park}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .parks-page {
          background: #071411;
          color: white;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }

        .container {
          width: min(1320px, calc(100% - 36px));
          margin: auto;
        }

        .hero {
          min-height: 58vh;
          display: flex;
          align-items: center;
          padding: 120px 0 70px;
          background-image:
            linear-gradient(rgba(7,20,17,0.45), rgba(7,20,17,0.82)),
            url("/images/kenya.jpg");
          background-size: cover;
          background-position: center;
        }

        .eyebrow {
          color: #c8a96b;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 14px;
        }

        .hero-title {
          font-size: clamp(42px, 7vw, 70px);
          margin: 0 0 18px;
          line-height: 1.05;
        }

        .hero-text {
          max-width: 760px;
          color: #e7e5e4;
          font-size: 20px;
          line-height: 1.9;
        }

        .parks-section {
          padding: 70px 0 100px;
        }

        .section-head {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-title {
          font-size: clamp(34px, 5vw, 52px);
          margin: 0 0 14px;
        }

        .section-text {
          color: #d6d3d1;
          font-size: 18px;
        }

        .parks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .park-card {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 14px 35px rgba(0,0,0,0.22);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .park-image {
          height: 420px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.55s ease;
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          background: rgba(0,0,0,0.10);
          backdrop-filter: blur(0px);
          opacity: 0;
          transition: all 0.35s ease;
        }

        .park-title {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.4;
          color: white;
          transform: translateY(18px);
          transition: all 0.35s ease;
          text-shadow: 0 4px 18px rgba(0,0,0,0.45);
        }

        .park-card:hover .park-image {
          transform: scale(1.08);
        }

        .park-card:hover .overlay {
          opacity: 1;
          background: rgba(0,0,0,0.30);
          backdrop-filter: blur(7px);
        }

        .park-card:hover .park-title {
          transform: translateY(0);
        }

        @media (max-width: 1100px) {
          .parks-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .park-image {
            height: 380px;
          }
        }

        @media (max-width: 760px) {
          .parks-grid {
            grid-template-columns: 1fr;
          }

          .park-image {
            height: 320px;
          }

          .park-title {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}