"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookNowPage() {
  return (
    <>
      <Navbar />

      <main className="book-page">
        <section className="book-section">
          <div className="book-glow book-glow-1" />
          <div className="book-glow book-glow-2" />

          <div className="book-shell">
            <div className="book-heading">
              <p className="eyebrow">Book Your Journey</p>

              <h1>Start Planning Your Luxury Safari</h1>

              <p className="lead">
                Share your travel details and let us begin designing a refined East
                African safari experience tailored to your style, comfort, and
                unforgettable moments.
              </p>
            </div>

            <div className="booking-layout">
              <form className="booking-form">
                <div className="form-top">
                  <div>
                    <p className="form-eyebrow">Safari Inquiry Form</p>
                    <h2>Tell us about your dream safari</h2>
                  </div>

                  <div className="form-pill">Luxury Planning</div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>

                  <div className="field">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>

                  <div className="field">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter your phone number" />
                  </div>

                  <div className="field">
                    <label>Destination</label>
                    <div className="select-wrap">
                      <select defaultValue="">
                        <option value="" disabled>
                          Choose destination
                        </option>
                        <option>Uganda</option>
                        <option>Rwanda</option>
                        <option>Kenya</option>
                        <option>Tanzania</option>
                        <option>Congo</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Safari Type</label>
                    <div className="select-wrap">
                      <select defaultValue="">
                        <option value="" disabled>
                          Select safari type
                        </option>
                        <option>Gorilla Trekking</option>
                        <option>Wildlife Safari</option>
                        <option>Luxury Safari</option>
                        <option>Family Safari</option>
                        <option>Honeymoon Safari</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Number of Travelers</label>
                    <input type="number" placeholder="e.g. 2" min="1" />
                  </div>

                  <div className="field">
                    <label>Budget</label>
                    <div className="select-wrap">
                      <select defaultValue="">
                        <option value="" disabled>
                          My Budget
                        </option>
                        <option>$0 - $1000</option>
                        <option>$1000 - $2000</option>
                        <option>$2000 - $3000</option>
                        <option>$3000 - $4000</option>
                        <option>$4000 onwards</option>
                        <option>Doesn't Matter</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Accommodation</label>
                    <div className="select-wrap">
                      <select defaultValue="">
                        <option value="" disabled>
                          Choose Accommodation
                        </option>
                        <option>Budget Accommodation</option>
                        <option>Mid-Range Accommodation</option>
                        <option>Luxury Accommodation</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Number of Days</label>
                    <input type="number" placeholder="Enter number of days" min="1" />
                  </div>

                  <div className="field full">
                    <label>Travel Date</label>
                    <input type="date" />
                  </div>

                  <div className="field full">
                    <label>Message / Special Requests</label>
                    <textarea
                      placeholder="Tell us about your dream safari, budget, travel style, or special requests..."
                      rows={6}
                    />
                  </div>
                </div>

                <div className="submit-row">
                  <button type="submit" className="submit-btn">
                    Submit Booking Inquiry
                  </button>

                  <p className="submit-note">
                    We’ll review your request and respond with a tailored safari proposal.
                  </p>
                </div>
              </form>

              <aside className="booking-info">
                <p className="info-eyebrow">Booking Information</p>
                <h2>Let’s shape the right safari for you.</h2>

                <p className="info-lead">
                  Every inquiry helps us understand your style, comfort level, and
                  safari goals so we can create a more personalized experience.
                </p>

                <div className="info-points">
                  <div className="info-point">
                    <span>01</span>
                    <div>
                      <h3>Tailor-Made Planning</h3>
                      <p>
                        We use your budget, dates, and destination interests to shape
                        a safari that feels personal and well designed.
                      </p>
                    </div>
                  </div>

                  <div className="info-point">
                    <span>02</span>
                    <div>
                      <h3>Luxury & Comfort</h3>
                      <p>
                        From accommodation style to safari type, your preferences help
                        us recommend the right level of comfort and experience.
                      </p>
                    </div>
                  </div>

                  <div className="info-point">
                    <span>03</span>
                    <div>
                      <h3>Fast Response</h3>
                      <p>
                        Once submitted, our team reviews your request and prepares the
                        right safari direction for your journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info-card">
                  <p className="mini-label">Why this form matters</p>
                  <p>
                    The more detail you provide, the better we can shape your safari
                    into something elegant, smooth, and unforgettable.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <style jsx>{`
          .book-page {
            min-height: 100vh;
            background: #071411;
            color: white;
            font-family: Arial, sans-serif;
          }

          .book-section {
            position: relative;
            overflow: hidden;
            padding: 140px 24px 90px;
            background:
              radial-gradient(circle at top left, rgba(200, 169, 107, 0.14), transparent 24%),
              radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 18%),
              linear-gradient(180deg, #071411 0%, #05100d 100%);
          }

          .book-glow {
            position: absolute;
            border-radius: 999px;
            filter: blur(100px);
            pointer-events: none;
            opacity: 0.4;
          }

          .book-glow-1 {
            width: 340px;
            height: 340px;
            background: rgba(200, 169, 107, 0.12);
            top: 30px;
            left: -80px;
          }

          .book-glow-2 {
            width: 300px;
            height: 300px;
            background: rgba(255, 255, 255, 0.04);
            right: -50px;
            top: 120px;
          }

          .book-shell {
            position: relative;
            z-index: 2;
            max-width: 1240px;
            margin: 0 auto;
          }

          .book-heading {
            max-width: 920px;
            margin-bottom: 48px;
          }

          .eyebrow {
            color: #c8a96b;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 13px;
            font-weight: 700;
            margin: 0 0 18px;
          }

          .book-heading h1 {
            margin: 0 0 20px;
            font-size: clamp(46px, 6vw, 78px);
            line-height: 0.98;
            letter-spacing: -1.8px;
            color: #f8fafc;
          }

          .lead {
            margin: 0;
            max-width: 860px;
            font-size: 20px;
            line-height: 1.9;
            color: rgba(255, 255, 255, 0.76);
          }

          .booking-layout {
            display: grid;
            grid-template-columns: 1.18fr 0.82fr;
            gap: 28px;
            align-items: start;
          }

          .booking-form,
          .booking-info {
            position: relative;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.055);
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 30px;
            padding: 32px;
            box-shadow:
              0 18px 40px rgba(0, 0, 0, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
          }

          .booking-form::before,
          .booking-info::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.03) 45%,
              rgba(255, 255, 255, 0.01)
            );
            pointer-events: none;
          }

          .form-top {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 28px;
            flex-wrap: wrap;
          }

          .form-eyebrow,
          .info-eyebrow,
          .mini-label {
            margin: 0 0 10px;
            color: #c8a96b;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 12px;
            font-weight: 700;
          }

          .form-top h2,
          .booking-info h2 {
            margin: 0;
            font-size: 30px;
            line-height: 1.08;
            color: #ffffff;
          }

          .form-pill {
            padding: 10px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 0.8);
            font-size: 13px;
            white-space: nowrap;
          }

          .form-grid {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
          }

          .field {
            display: flex;
            flex-direction: column;
          }

          .field.full {
            grid-column: 1 / -1;
          }

          .field label {
            display: block;
            margin-bottom: 10px;
            color: #f1f5f9;
            font-size: 15px;
            font-weight: 600;
          }

          .field input,
          .field textarea,
          .field select {
            width: 100%;
            padding: 17px 18px;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(255, 255, 255, 0.045);
            color: white;
            font-size: 16px;
            outline: none;
            box-sizing: border-box;
            transition: all 0.25s ease;
          }

          .field input::placeholder,
          .field textarea::placeholder {
            color: rgba(255, 255, 255, 0.48);
          }

          .field input:focus,
          .field textarea:focus,
          .field select:focus {
            border-color: rgba(200, 169, 107, 0.55);
            box-shadow: 0 0 0 4px rgba(200, 169, 107, 0.10);
            background: rgba(255, 255, 255, 0.06);
          }

          .field textarea {
            resize: vertical;
            min-height: 180px;
          }

          .select-wrap {
            position: relative;
          }

          .select-wrap::after {
            content: "⌄";
            position: absolute;
            right: 18px;
            top: 50%;
            transform: translateY(-52%);
            color: rgba(255, 255, 255, 0.88);
            font-size: 24px;
            pointer-events: none;
          }

          .field select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding-right: 48px;
            cursor: pointer;
          }

          .field select option {
            background: #0b1714;
            color: #ffffff;
          }

          .field input[type="date"] {
            color-scheme: dark;
          }

          .submit-row {
            position: relative;
            z-index: 1;
            display: flex;
            gap: 18px;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 26px;
          }

          .submit-btn {
            background: #c8a96b;
            color: #071411;
            border: none;
            padding: 14px 28px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 26px rgba(200, 169, 107, 0.24);
          }

          .submit-note {
            margin: 0;
            color: rgba(255, 255, 255, 0.62);
            font-size: 14px;
            line-height: 1.7;
            max-width: 420px;
          }

          .info-lead {
            position: relative;
            z-index: 1;
            margin: 16px 0 24px;
            color: rgba(255, 255, 255, 0.76);
            line-height: 1.9;
            font-size: 17px;
          }

          .info-points {
            position: relative;
            z-index: 1;
            display: grid;
            gap: 14px;
            margin-top: 10px;
          }

          .info-point {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
          }

          .info-point span {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #d8bc84, #b99652);
            color: #071411;
            font-weight: 800;
            font-size: 14px;
            flex-shrink: 0;
          }

          .info-point h3 {
            margin: 0 0 8px;
            font-size: 17px;
            color: white;
          }

          .info-point p {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 15px;
            line-height: 1.7;
          }

          .info-card {
            position: relative;
            z-index: 1;
            margin-top: 22px;
            padding: 18px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
          }

          .info-card p:last-child {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.8;
            font-size: 15px;
          }

          @media (max-width: 980px) {
            .booking-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .book-section {
              padding: 120px 16px 70px;
            }

            .booking-form,
            .booking-info {
              padding: 24px;
              border-radius: 24px;
            }

            .book-heading h1 {
              font-size: 40px;
            }

            .lead {
              font-size: 17px;
            }

            .form-grid {
              grid-template-columns: 1fr;
            }

            .form-top h2,
            .booking-info h2 {
              font-size: 24px;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}