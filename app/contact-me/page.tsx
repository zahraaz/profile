"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="w-1/2">
      <h1>this is the form</h1>
    </form>
  );
}
