"use client";

import { signOutAction } from "@/actions/authentication.action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

const UserButton = () => {
  const [isPending, startTrantision] = useTransition();
  const router = useRouter();

  const handleLogout = () => {
    startTrantision(() => {
      signOutAction()
        .then((callback) => {
          toast.success(callback?.message);
          router.refresh();
        })
        .catch((_) => {
          toast.error("Logout failed");
        });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer w-10 h-10 z-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[321px] p-2" align="end">
        <DropdownMenuItem className="flex space-x-2.5">
          <div className="w-11 h-11 bg-zinc-500 flex justify-center items-center rounded-full">
            <span className="text-lg">MI</span>
          </div>
          <div>
            <h1 className="text-lg font-medium">Moh. Ilhamuddin</h1>
            <h3 className="text-zinc-500">mohammad.ilhamuddin@gmail.com</h3>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-zinc-600 py-2.5">
          <Settings className="w-6 h-6 mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={isPending}
          className="text-zinc-600 py-2.5 hover:cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut className="w-6 h-6 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
