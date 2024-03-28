"use client";

import { editUser } from "@/actions/user.action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditUser, editUserSchema } from "@/lib/schemas/edit-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader, SquarePen, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useReducer, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface UsernameEditProps {
  username?: string;
}

const UsernameEdit = ({ username }: UsernameEditProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editMode, toggleEditMode] = useReducer((state) => !state, false);
  const form = useForm<EditUser>({
    resolver: zodResolver(editUserSchema),
    defaultValues: { username },
  });

  const onSubmit = (values: EditUser) => {
    startTransition(() => {
      editUser(values)
        .then((callback) => {
          toast.success(callback.message);
          toggleEditMode();
          router.push(`/${callback.data.username}/settings/account`);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between space-x-5">
          <div className="flex-1">
            {editMode ? (
              <FormField
                control={form.control}
                name="username"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="your username"
                        className="bg-muted-foreground/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <h1 className="text-zinc-400">{username}</h1>
            )}
          </div>
          <div>
            {editMode ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleEditMode}
                  disabled={isPending}
                  type="button"
                >
                  <X className="w-5 h-5 stroke-rose-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <Check className="w-5 h-5 stroke-emerald-500" />
                  )}
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleEditMode}
                disabled={isPending}
                type="button"
              >
                {isPending ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <SquarePen className="w-5 h-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UsernameEdit;
