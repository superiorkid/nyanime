import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface Props {
  children: Readonly<React.ReactNode>;
}

function Layout({ children }: Props) {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <Image
        fill
        priority
        src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="auth background image"
        className="object-cover brightness-50 saturate-50"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <main className="aspect-square z-10">{children}</main>
    </div>
  );
}

export default Layout;
