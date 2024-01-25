"use client";
import { Check } from "react-feather";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function AfterSubmission() {
  return (
    <div>
      <NavBar />
      <main className="text-center">
        <div className=" m-0 flex justify-center">
          <Check className=" text-green-500 size-1/4 my-0" />
        </div>
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
