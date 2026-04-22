import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RECEIVER_EMAIL = "safariluxeproject@gmail.com";
const WHATSAPP_NUMBER = "256709884417";

export default function ContactPage() {
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
            Contact Us
          </p>

          <h1
            style={{
              fontSize: "56px",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            Let’s Plan Your Safari
          </h1>

          <p
            style={{
              maxWidth: "850px",
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#d6d3d1",
              marginBottom: "50px",
            }}
          >
            Reach out to us for gorilla trekking, wildlife safaris, pricing,
            custom journeys, or any safari guidance you need.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <form
              action={`https://formsubmit.co/${RECEIVER_EMAIL}`}
              method="POST"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                backdropFilter: "blur(12px)",
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message - Safari Luxe"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Safari Luxe. We have received your message and will get back to you soon."
              />

              <div style={{ display: "grid", gap: "20px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#e7e5e4",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Enter your full name"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#e7e5e4",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#e7e5e4",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Enter your phone number"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#e7e5e4",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="What is this about?"
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#e7e5e4",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="Message"
                    placeholder="Write your message here..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "24px",
                  background: "#c8a96b",
                  color: "#071411",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>

            <div
              style={{
                display: "grid",
                gap: "20px",
              }}
            >
              <div
                style={infoCardStyle}
              >
                <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Email</h3>
                <p style={{ color: "#d6d3d1", lineHeight: "1.8", margin: 0 }}>
                  {RECEIVER_EMAIL}
                </p>
              </div>

              <div
                style={infoCardStyle}
              >
                <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>WhatsApp</h3>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Safari%20Luxe%2C%20I%20want%20to%20plan%20a%20safari.`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#25D366",
                    lineHeight: "1.8",
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  0709884417
                </a>
              </div>

              <div
                style={infoCardStyle}
              >
                <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Location</h3>
                <p style={{ color: "#d6d3d1", lineHeight: "1.8", marginBottom: "16px" }}>
                  Kampala, Uganda
                </p>

                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7659477472484!2d32.53134027395824!3d0.2935712997035459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177da3325affffff%3A0x6febb0970b283348!2sUETCL%20Mutundwe%20Substation!5e0!3m2!1sen!2sug!4v1776828711433!5m2!1sen!2sug"
  width="100%"
  height="250"
  style={{
    border: 0,
    borderRadius: "18px",
  }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
  title="Safari Luxe Location Map"
/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const infoCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
  backdropFilter: "blur(12px)",
};