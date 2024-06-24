"use client";

import { usePathname, useRouter } from "next/navigation";
import { animationPageOut } from "@/utils/animation";
import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

const TransitionLint = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) animationPageOut(href, router);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default TransitionLint;
