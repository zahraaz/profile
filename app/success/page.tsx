"use client";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AfterSubmission() {
  return (
    <div>
      <Header />
      <main className="text-center">
        <h2 className="text-primary">Loading...</h2>
        <p>Thank you for conacting with me :)</p>
        <div> Go back to the home page</div>
      </main>
      <Footer />
    </div>
  );
}
