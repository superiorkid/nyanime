import React from "react";
import Container from "@/components/container";
import Menu from "@/components/menu";
import { buttonVariants } from "./ui/button";
import SearchBar from "./search-bar";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { neobrutalism } from "@clerk/themes";
import UserMenuDropdown from "@/components/user-menu-dropdown";
import { UserButton } from "@clerk/nextjs";

const Navigation = () => {
  const user = false;

  return (
    <header className="border-b border-zinc-500 py-3 bg-transparent">
      <Container className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="font-bold text-3xl font-sans">next-anime</h1>
          </div>
          <Menu />
        </div>
        <div className="flex space-x-2 items-center">
          <SearchBar />

          {user ? (
            <>
              <UserMenuDropdown />
              <UserButton
                afterSignOutUrl="/"
                appearance={{ baseTheme: neobrutalism }}
              />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    className: cn(
                      "font-semibold bg-foreground text-background hover:bg-muted-foreground"
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
                    className: cn("font-semibold"),
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
