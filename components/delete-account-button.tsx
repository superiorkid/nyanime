"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteAccount } from "@/actions/user.action";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DeleteAccountButtonProps {
  userId: string;
}

const DeleteAccountButton = ({ userId }: DeleteAccountButtonProps) => {
  const [_, startTransition] = useTransition();
  const router = useRouter();

  const handleDeleteAccount = () => {
    startTransition(async () => {
      await deleteAccount(userId).then((callback) => {
        router.refresh();
        toast.success(callback.message);
      });
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <X className="w-5 h-5 mr-2" />
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-foreground">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-foreground">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAccount}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAccountButton;
