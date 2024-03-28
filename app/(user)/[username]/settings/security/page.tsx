import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, X } from "lucide-react";
import React from "react";

const SecurityPage = () => {
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
              <Button variant="destructive">
                <X className="w-5 h-5 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
