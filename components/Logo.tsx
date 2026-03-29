"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Tailwind height class (width follows aspect ratio) */
  sizeClassName?: string;
  priority?: boolean;
};

export default function Logo({ className = "", sizeClassName = "h-9", priority = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <Image
        src="/logo.svg"
        alt="Oscar Gas"
        priority={priority}
        width={200}
        height={40}
        draggable={false}
        className={`${sizeClassName} transition-transform duration-200 group-hover:scale-[1.03]`}
      />
    </Link>
  );
}
