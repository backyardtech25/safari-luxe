import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#071411",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            padding: "140px 40px 80px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#c8a96b",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            About Safari Luxe
          </p>

          <h1 style={{ fontSize: "56px", marginBottom: "24px", lineHeight: "1.1" }}>
            Crafted for Travelers Who Want More Than Just a Trip
          </h1>

          <p
            style={{
              maxWidth: "900px",
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#d6d3d1",
              marginBottom: "50px",
            }}
          >
            Safari Luxe is a premium East African safari brand built to deliver
            unforgettable gorilla trekking, wildlife adventures, and luxury journeys
            with modern planning and strong visual storytelling.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Our Mission</h3>
              <p style={{ color: "#d6d3d1", lineHeight: "1.8" }}>
                To create premium safari journeys that combine adventure, comfort,
                trust, and unforgettable moments.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Our Vision</h3>
              <p style={{ color: "#d6d3d1", lineHeight: "1.8" }}>
                To become a modern luxury safari brand that showcases East Africa
                through premium digital experiences and world-class travel planning.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>What We Offer</h3>
              <p style={{ color: "#d6d3d1", lineHeight: "1.8" }}>
                Gorilla trekking, wildlife safaris, tailor-made itineraries, destination
                guidance, and elegant safari planning across East Africa.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}