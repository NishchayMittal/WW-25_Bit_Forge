"use client";
import "./forms.css";

export default function Form() {
  return (
    <div className="container">
      <h1>Oceanic Website User Review</h1>
      <form
        action="https://formsubmit.co/mhaskeneel0709@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            required
          ></textarea>
        </div>

        {/* ✅ This redirects to your custom thank-you page */}
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/forms/thankyou"
        />

        {/* ✅ This is the correct way to use a submit button */}
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
}
