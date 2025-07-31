"use client";
import Link from "next/link";
import "./forms.css"; // optional if you want consistent styling
export default function ThankYou() {
  return (
    <div className="container">
      <h1>🎉 Thank You!</h1>
      <p>Your message has been received. We'll get back to you soon.</p>

      <button
        className="btn btn-lg btn-dark btn-block"
        onClick={() => (window.location.href = "/")}
      >
        Return Home
      </button>
    </div>
  );
}
