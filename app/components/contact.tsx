"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader } from "react-feather";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        form.current as any,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("result");
          console.log(result.text);
          toast.success("Email sent successfully!");
          router.refresh();
          router.push("/success");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error ocuuered please try again later!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4s
      dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90"
    >
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
      from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute
      top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      ></div>
      <div className="z-10">
        <h4
          className="text-xl font-bold text-sky-950 my-4
        dark:text-sky-300 dark:text-opacity-90"
        >
          Let&apos;s Connect
        </h4>
        <p
          className="text-sky-950 mb-4 max-w-md
        dark:text-sky-50 dark:text-opacity-90"
        >
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you :)
        </p>
      </div>
      <div>
        <form className="flex flex-col" ref={form as any} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-sky-950 block text-sm mb-2 font-medium
                dark:text-sky-50"
            >
              Full Name
            </label>

            <input
              name="user_name"
              type="text"
              id="user_name"
              required
              className="bg-pink-50 border border-[#33353F] 
                text-sky-950
                dark:bg-sky-950 dark:text-sky-50
                placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="text-sky-950 block text-sm mb-2 font-medium
              dark:text-gray-50"
            >
              Your Email
            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-pink-50  border border-[#33353F] 
                text-sky-950
                dark:bg-sky-950 dark:text-sky-50
                placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
              placeholder=""
              maxLength={500}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-sky-950 block text-sm mb-2 font-medium
              dark:text-sky-50"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-62 bg-pink-50  border border-[#33353F]
                text-sky-950 placeholder-[#9CA2A9]
                dark:bg-sky-950 dark:text-sky-50
                 text-sm rounded-lg block w-full p-2.5"
              placeholder=""
              required
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-rose-300 hover:bg-primary-600 text-black font-medium 
              py-2.5 px-5 rounded-lg w-full
              dark:text-sky-50 dark:text-opacity-90  dark:bg-sky-700"
            value="send"
            disabled={isLoading}
          >
            {isLoading && (
              <span>
                {" "}
                <Loader className="inline m-1" />
                Sending...
              </span>
            )}
            {!isLoading && (
              <span>
                {" "}
                Send
                <Send className="inline m-1" />{" "}
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
