"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@prisma/client";
import { Bookmark, Check, ChevronDown, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface UserMenuDropdownProps {
  user: User | null;
}

function UserMenuDropdown({ user }: UserMenuDropdownProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="lg"
          className="font-semibold text-background z-10"
        >
          My Library
          <ChevronDown className="w-5 h-5 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 w-[201px]" align="end">
        <DropdownMenuItem
          className="py-2.5 hover:cursor-pointer text-zinc-600"
          onClick={(event) => {
            router.push(`/${user?.username}/library/watching`);
          }}
        >
          <Eye className="w-5 h-5 mr-2" />
          Watching
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-2.5 hover:cursor-pointer text-zinc-600"
          onClick={() => router.push(`/${user?.username}/library/to-watch`)}
        >
          <Bookmark className="w-5 h-5 mr-2" />
          To Watch
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-2.5 hover:cursor-pointer text-zinc-600"
          onClick={() => router.push(`/${user?.username}/library/watched`)}
        >
          <Check className="w-5 h-5 mr-2" />
          Watched
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          className="py-2.5 hover:cursor-pointer text-zinc-600"
          onClick={() => router.push(`/${user?.username}/library/collections`)}
        >
          <Folder className="w-5 h-5 mr-2" />
          Collections
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenuDropdown;
