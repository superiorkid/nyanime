import Link from "next/link";
import React from "react";
import Container from "./container";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-7 border-t border-zinc-600">
      <Container className="flex justify-between items-center">
        <div className="flex space-x-3.5 items-center">
          <Link href="/" className="font-medium">
            next-anime.com
          </Link>
          <Link href="#terms" className="text-zinc-400 text-sm">
            Terms & Privacy
          </Link>
          <Link href="#contacts" className="text-zinc-400 text-sm">
            Contacts
          </Link>
        </div>

        <div className="flex gap-2">
          <Link
            href="#social"
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "rounded-2xl",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link
            href="#social"
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "rounded-2xl",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;