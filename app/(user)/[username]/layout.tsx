import { getCurrentUser } from "@/actions/user.action";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { notFound } from "next/navigation";
import React from "react";

interface UserLayoutProps {
  children: Readonly<React.ReactNode>;
}

const UserLayout = async ({ children }: UserLayoutProps) => {
  const user = await getCurrentUser();

  return (
    <>
      <Navigation user={user} />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
