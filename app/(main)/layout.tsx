import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
