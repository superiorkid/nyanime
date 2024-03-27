import SignUpForm from "@/components/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function RegisterPage() {
  return (
    <Card className="w-[428px]">
      <CardHeader>
        <CardTitle>
          <Link href="/">Next-anime</Link>
        </CardTitle>
        <CardDescription>Sign up to continue using this app</CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <SignUpForm />
        <Separator className="my-5" />
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-sky-600">
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default RegisterPage;
