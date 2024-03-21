"use client";

import useMenu from "@/hooks/useMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const Menu = () => {
  const menus = useMenu();

  return (
    <nav className="flex space-x-2">
      {menus.map(({ href, isActive, label }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "lg",
              className: cn(
                "px-1.5 text-lg font-normal hover:bg-transparent hover:font-medium hover:text-background",
                isActive && "font-medium"
              ),
            })
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
