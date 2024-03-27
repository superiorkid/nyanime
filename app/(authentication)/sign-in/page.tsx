import SignInForm from "@/components/sign-in-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <Card className="w-[428px]">
      <CardHeader>
        <CardTitle>
          <Link href="/">Next-anime</Link>
        </CardTitle>
        <CardDescription>Sign in to continue using this app</CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <SignInForm />
        <Separator className="my-5" />
        <p className="text-sm">
          Dont have an account?{" "}
          <Link href="/sign-up" className="text-sky-600">
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default SignInPage;
