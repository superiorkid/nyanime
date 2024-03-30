import { getCurrentUser } from "@/actions/user.action";
import Container from "@/components/container";
import LibraryTabs from "@/components/library-tabs";
import { buttonVariants } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LibraryLayoutProps {
  children: Readonly<React.ReactNode>;
}

const LibraryLayout = async ({ children }: LibraryLayoutProps) => {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen">
      <section className="h-[20dvh] relative">
        <Image
          fill
          priority
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user background"
          className="object-cover -z-10 brightness-50 saturate-50"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          decoding="async"
        />

        <Container className="grid grid-cols-2">
          <div className="flex space-x-5 items-center h-[20dvh]">
            <div className="w-28 h-28 rounded-full bg-zinc-600 flex justify-center items-center">
              <span className="text-3xl">MI</span>
            </div>
            <div>
              <h1 className="text-3xl font-medium">
                Moh. iLhamuddin
                <Link
                  href={`/${user?.username}/settings/account`}
                  className={buttonVariants({
                    className: "inline-flex ml-2 p-0",
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Settings2 className="w-5 h-5" />
                </Link>
              </h1>
              <p className="text-zinc-200">
                <span>20 Followers</span> | <span>8 Following</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <LibraryTabs user={user} />

      {children}
    </div>
  );
};

export default LibraryLayout;
