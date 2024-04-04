import Container from "@/components/container";
import Menu from "@/components/menu";
import UserMenuDropdown from "@/components/user-menu-dropdown";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import SearchBar from "@/components/search-bar";
import { Button, buttonVariants } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import { AlignRight } from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

interface NavigationProps {
  user: Prisma.UserGetPayload<{
    include: {
      animeStatus: { include: { anime: true } };
    };
  }> | null;
}

const Navigation = ({ user }: NavigationProps) => {
  return (
    <header className="border-b border-zinc-500 py-3 bg-transparent">
      <Container className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl font-sans">
              nyanime
            </h1>
          </div>
          <div className="hidden lg:block">
            <Menu />
          </div>
        </div>

        <div className="flex space-x-1 items-center">
          <SearchBar />

          <div className="md:hidden">
            <MobileMenu user={user} />
          </div>

          {!!user ? (
            <div className="hidden md:flex">
              <UserMenuDropdown user={user} />
              <UserButton user={user} />
            </div>
          ) : (
            <>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    className: cn(
                      "font-semibold bg-foreground text-background hover:bg-muted-foreground z-10 hidden md:flex"
                    ),
                    variant: "secondary",
                    size: "lg",
                  })
                )}
              >
                Log In
              </Link>
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({
                    className: cn("font-semibold z-10 hidden md:flex"),
                    variant: "secondary",
                    size: "lg",
                  })
                )}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
