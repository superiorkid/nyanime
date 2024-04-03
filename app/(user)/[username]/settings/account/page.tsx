import { getCurrentUser } from "@/actions/user.action";
import EmailEdit from "@/components/email-edit";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import UsernameEdit from "@/components/username-edit";
import { User } from "lucide-react";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Your Profile - Nyanime Account Settings",
  description:
    "Take control of your Nyanime profile with our Account Settings page. Update your username, email, and other profile details to personalize your Nyanime experience. Customize your profile to reflect your anime preferences and connect with like-minded fans. Manage your account effortlessly and unlock new features tailored to your interests.",
};

interface AccountPageProps {
  params: {
    username: string;
  };
}

const AccountPage = async ({ params: { username } }: AccountPageProps) => {
  const user = await getCurrentUser();

  if (user?.username !== username) {
    redirect(`/${user?.username}/settings/account`);
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/superiorkid/settings/account">
            <User className="w-4 h-4 mr-2 inline-flex fill-background" />
            Account
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <header className="mt-8 space-y-1">
        <h1 className="text-4xl font-medium">Account</h1>
        <p className="text-zinc-400 text-lg">Manage your account settings</p>
      </header>

      <div className="mt-8 space-y-8">
        <div className="space-y-5">
          <h2 className="border-b border-muted-foreground py-3 text-lg font-semibold">
            Profile
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 items-center">
              <div className="w-16 h-16 bg-zinc-300 rounded-full flex justify-center items-center">
                <span className="text-2xl">MI</span>
              </div>
              <div>
                <h1 className="text-xl font-medium">{user?.username}</h1>
                <h3 className="text-zinc-400">{user?.email}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="border-b border-muted-foreground py-3 text-xl font-semibold">
            Username
          </h2>
          <UsernameEdit username={user?.username!} />
        </div>

        <div className="space-y-5">
          <h2 className="border-b border-muted-foreground py-3 text-xl font-semibold">
            Email
          </h2>
          <EmailEdit email={user?.email!} />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
