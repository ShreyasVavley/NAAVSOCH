"use client";

import Link from "next/link";
import React from "react";

interface UiverseButtonSecondaryProps {
  href: string;
  text: string;
}

export default function UiverseButtonSecondary({ href, text }: UiverseButtonSecondaryProps) {
  return (
    <Link href={href} className="uiverse-btn-sec">
      {text}
    </Link>
  );
}
