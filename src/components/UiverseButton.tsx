"use client";

import Link from "next/link";
import React from "react";

interface UiverseButtonProps {
  href: string;
  text: string;
}

export default function UiverseButton({ href, text }: UiverseButtonProps) {
  return (
    <Link href={href} className="uiverse-btn">
      {text}
    </Link>
  );
}
