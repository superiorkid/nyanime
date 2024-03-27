import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Check, ChevronDown, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function UserMenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="lg"
          className="font-semibold text-background"
        >
          My Library
          <ChevronDown className="w-5 h-5 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 w-[201px]" align="end">
        <DropdownMenuItem className="py-2.5 hover:cursor-pointer text-zinc-600">
          <Eye className="w-5 h-5 mr-2" />
          Watching
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2.5 hover:cursor-pointer text-zinc-600">
          <Bookmark className="w-5 h-5 mr-2" />
          To Watch
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2.5 hover:cursor-pointer text-zinc-600">
          <Check className="w-5 h-5 mr-2" />
          Watched
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenuDropdown;
