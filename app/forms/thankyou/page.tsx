import Link from "next/link";
import "./forms.css"; // optional if you want consistent styling

export default function ThankYou() {
  return (
    <div className="container">
      <h1>🎉 Thank You!</h1>
      <p>Your message has been received. We'll get back to you soon.</p>

      <Link href="/">
        <button className="btn btn-lg btn-dark btn-block">Return Home</button>
      </Link>
    </div>
  );
}
