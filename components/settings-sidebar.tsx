"use client";

import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { Shield, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SettingsSidebarProps {
  user: User | null;
}

const SettingsSidebar = ({ user }: SettingsSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-muted-foreground pt-12">
      <div className="flex flex-col space-y-2">
        <Link
          href={`/${user?.username}/settings/account`}
          className={cn(
            "px-5 py-3 mr-5 rounded-md",
            pathname === `/${user?.username}/settings/account` &&
              "font-medium bg-muted-foreground/50"
          )}
        >
          <UserIcon className="w-5 h-5 mr-2 inline-flex fill-background" />
          Account
        </Link>
        <Link
          href={`/${user?.username}/settings/security`}
          className={cn(
            "px-5 py-3 rounded-md mr-5",
            pathname === `/${user?.username}/settings/security` &&
              "font-medium bg-muted-foreground/50"
          )}
        >
          <Shield className="w-5 h-5 mr-2 inline-flex fill-background" />
          Security
        </Link>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
