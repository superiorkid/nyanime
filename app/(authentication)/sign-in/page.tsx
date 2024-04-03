import SignInForm from "@/components/sign-in-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In to Nyanime - Your Gateway to Anime Paradise",
  description:
    "Welcome back to Nyanime! Sign in to access your personalized anime recommendations, favorite shows, and exclusive content. Dive into a world of endless entertainment with our diverse collection of anime titles. Join our community of anime enthusiasts today!",
};

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
