"use client";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function AfterSubmission() {
  return (
    <div>
      <NavBar />
      <main className="text-center">
        <h2 className="text-primary">Loading...</h2>
        <p>Thank you for conacting with me :)</p>
        <div className="text-lg font-semibold">
          <a href="/">Go back to the home page </a>{" "}
        </div>
      </main>
      <Footer />
    </div>
  );
}
