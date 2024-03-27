import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getCurrentUser } from "@/actions/user.action";

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

async function RootLayout({ children }: RootLayoutProps) {
  const user = await getCurrentUser();

  return (
    <>
      <Navigation user={user} />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
