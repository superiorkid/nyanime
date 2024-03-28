import { getCurrentUser } from "@/actions/user.action";
import Container from "@/components/container";
import SettingsSidebar from "@/components/settings-sidebar";
import { Shield, User } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UserPageProps {
  children: Readonly<React.ReactNode>;
}

const UserPage = async ({ children }: UserPageProps) => {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen">
      <Container className="flex space-x-8 h-screen">
        <SettingsSidebar user={user} />

        <main className="flex-1 py-12">
          <div className="max-w-screen-sm">{children}</div>
        </main>
      </Container>
    </div>
  );
};

export default UserPage;
