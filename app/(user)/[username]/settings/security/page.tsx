import { getCurrentUser } from "@/actions/user.action";
import DeleteAccountButton from "@/components/delete-account-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Shield } from "lucide-react";

const SecurityPage = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/superiorkid/settings/security">
            <Shield className="w-4 h-4 mr-2 inline-flex fill-background" />
            Security
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <header className="mt-8 space-y-1">
        <h1 className="text-4xl font-medium">Security</h1>
        <p className="text-zinc-400 text-lg">Manage Account Security</p>
      </header>

      <div className="mt-8 space-y-8">
        <div className="space-y-5">
          <h2 className="border-b border-muted-foreground py-3 text-lg font-semibold text-rose-500">
            Delete Account
          </h2>

          <div className="flex flex-col space-y-2">
            <p>Delete Account can erase your data. be careful!</p>
            <div className="">
              <DeleteAccountButton userId={user!.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
