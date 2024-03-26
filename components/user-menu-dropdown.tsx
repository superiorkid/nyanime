import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function UserMenuDropdown() {
  return (
    <Button variant="link" size="lg" className="font-semibold text-background">
      My Library
      <ChevronDown className="w-5 h-5 ml-2" />
    </Button>
  );
}

export default UserMenuDropdown;
