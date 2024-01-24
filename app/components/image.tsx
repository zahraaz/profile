"use client";
import Link from "next/link";
import Image from "next/image";

import photo from "@/public/photo.jpg";

export default function PersonalImage() {
  return (
    <Link href="/">
      <Image
        src={photo}
        alt="personal image"
        quality={100}
        width={300}
        height={300}
        className="inline-block h-12 w-12 rounded-full ring-2"
      />
    </Link>
  );
}
