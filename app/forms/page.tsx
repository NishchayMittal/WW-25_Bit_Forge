"use client";
import Navbar from "@/app/components/Navbar";
import "./forms.css";

export default function Form() {
  return (
    <>
      <Navbar />
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,80C672,85,768,139,864,160C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32V100H0Z"
            fill="#00bcd4"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="form-center-wrapper">
        <div className="container">
          <h1>Oceanic Feedback & Conservation Pledge</h1>
          <p className="form-intro">
            Help us make our ocean exploration website better and share your
            voice for ocean conservation. Whether you have feedback, creative
            ideas, or a personal pledge — we’d love to hear from you!
          </p>

          <form
            action="https://formsubmit.co/mhaskeneel0709@gmail.com"
            method="POST"
          >
            {/* User Info */}
            <div className="form-group">
              <label>Your Contact Info</label>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
            </div>

            {/* Website Experience */}
            <div className="form-group">
              <label>🌐 How was your experience using our website?</label>
              <textarea
                placeholder="Share what you liked, what could be improved, or any issues you faced."
                className="form-control"
                name="website_feedback"
                required
              ></textarea>
            </div>

            {/* Creative Ideas */}
            <div className="form-group">
              <label>💡 Do you have any ideas or suggestions?</label>
              <textarea
                placeholder="Suggest features, content, or actions we can take to support marine life."
                className="form-control"
                name="conservation_ideas"
              ></textarea>
            </div>

            {/* Conservation Pledge */}
            <div className="form-group">
              <label>📝 Make a Personal Ocean Pledge</label>
              <textarea
                placeholder="Example: I pledge to reduce single-use plastic, or organize a beach cleanup."
                className="form-control"
                name="pledge"
              ></textarea>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/forms/thankyou"
            />

            {/* Submit */}
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              ✉️ Submit Response
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
