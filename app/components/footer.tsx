"use client";
import Link from "next/link";
import { Facebook, Instagram, GitHub, Linkedin, Heart } from "react-feather";

export default function Footer() {
  return (
    <footer
      className="m-0 px-4 text-center text-gray-500
    dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <small className=" m-0 flex justify-center">
        <Link href="https://github.com/zahraaz">
          <GitHub />
        </Link>
        <Link href="https://www.linkedin.com/in/zahraa-mahmood/">
          <Linkedin />
        </Link>
        <Link href="https://www.instagram.com/zahraa_mahmod.dev/">
          <Instagram />
        </Link>
        <Link href="https://web.facebook.com/zahra.chan.3003/">
          <Facebook />
        </Link>
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>
        Made with <Heart className="inline size-4" /> & verious tech in Mosul,
        Iraq &copy; Zahraa Mahmood 2024
      </p>
    </footer>
  );
}
