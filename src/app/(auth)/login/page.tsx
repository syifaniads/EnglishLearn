"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { EyeIcon, EyeOffIcon, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import google from "@public/assets/logo/google.svg";
import facebook from "@public/assets/logo/facebook.svg";
import apple from "@public/assets/logo/apple.svg";

const loginSchema = z.object({
  emailOrUsername: z.string().min(1, "Email or username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-magenta to-vivid flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 space-y-6 my-12 pb-14">
        <div className="text-center space-y-2 relative">
          <MoveLeft
            className="absolute left-12 cursor-pointer"
            onClick={() => router.back()}
          />
          <h1 className="text-2xl font-semibold">Log in</h1>
          <p className="text-sm text-gray-600">
            {"Don't have any account? "}
            <Link
              href="/#hero"
              className="text-black font-bold hover:underline"
            >
              Get Started
            </Link>
          </p>
        </div>

        <div className="space-y-4 px-12">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
          >
            <Image
              src={google || "/placeholder.svg"}
              alt="Google Logo"
              width={20}
              height={20}
              className="h-4 w-4"
            />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
          >
            <Image
              src={facebook || "/placeholder.svg"}
              alt="Facebook Logo"
              width={20}
              height={20}
              className="h-4 w-4"
            />
            Continue with Facebook
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-black border"
          >
            <Image
              src={apple || "/placeholder.svg"}
              alt="Apple Logo"
              width={20}
              height={20}
              className="h-4 w-4"
            />
            Continue with Apple
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-black rounded-full" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2">or</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="emailOrUsername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address or username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-12 rounded-xl border-black mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                          className="h-12 rounded-xl border-black mt-1"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          className="absolute right-0 hover:bg-transparent top-1 h-12 w-12 px-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 rounded-full font-semibold bg-cyan-400 hover:bg-cyan-500 text-black"
              >
                Masuk
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
