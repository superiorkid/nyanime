"use client";

import React, { useReducer, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { AlignRight, Bookmark, Check, Eye, Hand, LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import useMenu from "@/hooks/useMenu";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { signOutAction } from "@/actions/authentication.action";
import { toast } from "sonner";

interface MobileMenuProps {
  user: User | null;
}

function MobileMenu({ user }: MobileMenuProps) {
  const [open, openToggle] = useReducer((state) => !state, false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const menus = useMenu();

  const handleLogout = () => {
    startTransition(() => {
      signOutAction()
        .then((callback) => {
          toast.success(callback?.message);
          openToggle();
          router.push("/");
        })
        .catch((_) => {
          toast.error("Logout failed");
        });
    });
  };

  return (
    <Sheet open={open} onOpenChange={openToggle}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <AlignRight className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="text-foreground py-10">
        <SheetHeader className="items-end mb-8">
          <SheetTitle>Nyanime</SheetTitle>
        </SheetHeader>

        <div className="items-end flex flex-col space-y-5">
          <div className="space-y-3 items-end flex flex-col">
            {menus.map(({ href, isActive, label }, index) => (
              <Button
                key={index}
                variant="link"
                size="sm"
                className={cn(isActive && "font-seibold underline")}
                onClick={() => {
                  router.push(href);
                  openToggle();
                }}
              >
                {label}
              </Button>
            ))}
          </div>

          <Separator />

          <div className="flex flex-col space-y-3 items-end">
            {!!user ? (
              <>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    router.push(`/${user.username}/settings/account`);
                    openToggle();
                  }}
                >
                  Watching
                  <Eye className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    router.push(`/${user.username}/settings/account`);
                    openToggle();
                  }}
                >
                  To Watch
                  <Bookmark className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    router.push(`/${user.username}/settings/account`);
                    openToggle();
                  }}
                >
                  Watched
                  <Check className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    router.push(`/${user.username}/settings/account`);
                    openToggle();
                  }}
                >
                  <Hand className="w-4 h-4 mr-2 fill-amber-500 stroke-amber-700" />
                  Hello, {user.username}
                </Button>

                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Log out
                  <LogOut className="w-4 h-4 ml-2" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    router.push("/sign-in");
                    openToggle();
                  }}
                  className={cn(
                    pathname === "/sign-in" && "font-semibold underline"
                  )}
                >
                  Log in
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    router.push("/sign-up");
                    openToggle();
                  }}
                  className={cn(
                    pathname === "/sign-up" && "font-semibold underline"
                  )}
                >
                  Getting Started
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
