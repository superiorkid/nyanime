import Container from "@/components/container";
import Menu from "@/components/menu";
import UserMenuDropdown from "@/components/user-menu-dropdown";
import { cn } from "@/lib/utils";
import { Prisma, User } from "@prisma/client";
import Link from "next/link";
import SearchBar from "./search-bar";
import { buttonVariants } from "./ui/button";
import UserButton from "./user-button";

interface NavigationProps {
  user: Prisma.UserGetPayload<{
    include: {
      toWatch: { include: { anime: true } };
      watchings: { include: { anime: true } };
    };
  }> | null;
}

const Navigation = ({ user }: NavigationProps) => {
  return (
    <header className="border-b border-zinc-500 py-3 bg-transparent">
      <Container className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="font-bold text-3xl font-sans">next-anime</h1>
          </div>
          <Menu />
        </div>
        <div className="flex space-x-1 items-center">
          <SearchBar />

          {!!user ? (
            <>
              <UserMenuDropdown user={user} />
              <UserButton user={user} />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    className: cn(
                      "font-semibold bg-foreground text-background hover:bg-muted-foreground z-10"
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
                    className: cn("font-semibold z-10"),
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
