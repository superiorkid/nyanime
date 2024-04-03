import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Container from "./container";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-7 border-t border-zinc-600">
      <Container className="flex justify-between items-center">
        <div className="flex space-x-3.5 items-center">
          <Link href="/" className="font-medium">
            nyanime.vercel.app
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
            href="https://github.com/superiorkid/next-anime"
            className={buttonVariants({
              variant: "link",
              size: "sm",
              className: "rounded-2xl text-secondary",
            })}
          >
            GitHub
            <SquareArrowOutUpRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
