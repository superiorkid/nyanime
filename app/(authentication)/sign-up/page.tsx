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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Nyanime - Unlock a World of Anime Wonders",
  description:
    "Ready to embark on your anime journey? Sign up for Nyanime and immerse yourself in a realm of captivating stories, vibrant characters, and thrilling adventures. Gain access to a vast library of anime content, personalized recommendations, and exciting community features. Start your anime odyssey with Nyanime now!",
};

function RegisterPage() {
  return (
    <Card className="w-[428px]">
      <CardHeader>
        <CardTitle>
          <Link href="/">Nyanime</Link>
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
