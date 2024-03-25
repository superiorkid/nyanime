import React from "react";
import Container from "@/components/container";
import Menu from "@/components/menu";
import { Button } from "./ui/button";
import SearchBar from "./search-bar";

const Navigation = () => {
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
          <Button
            variant="secondary"
            size="lg"
            className="font-semibold bg-foreground text-background hover:bg-muted-foreground"
          >
            Log In
          </Button>
          <Button variant="secondary" size="lg" className="font-semibold">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
