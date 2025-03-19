"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon, EyeOffIcon, MoveLeft } from "lucide-react";
import fb from "@public/assets/logo/facebook.svg";
import google from "@public/assets/logo/google.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CharSelectorTOEFL from "./select-characterTOEFL";
import CharSelectorIELTS from "./select-characterIELTS";
import char1 from "@public/assets/character/user/toeflF.svg";
import char2 from "@public/assets/character/user/toeflM.svg";
import char3 from "@public/assets/character/user/ieltsF.svg";
import char4 from "@public/assets/character/user/ieltsM.svg";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  gender: z.enum(["man", "woman"]).optional(),
  birthMonth: z.string().min(1, "Month is required"),
  birthDate: z.string().min(1, "Date is required"),
  birthYear: z.string().min(1, "Year is required"),

  rememberMe: z.boolean().optional(),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

interface TestSignUpProps {
  testType: "IELTS" | "TOEFL";
  backgroundColor: string;
  buttonColor: string;
  characterImage: string;
  additionalImage?: string;
}

const TestSignUp: React.FC<TestSignUpProps> = ({
  testType,
  backgroundColor,
  buttonColor,
  characterImage,
  additionalImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: undefined,
      birthMonth: "",
      birthDate: "",
      birthYear: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    setIsOpen(true);
    console.log(data);
  };

  const modalCategory = (type: string) => {
    return type === "TOEFL" ? (
      <CharSelectorTOEFL char1={char1} char2={char2} />
    ) : (
      <CharSelectorIELTS char1={char3} char2={char4} />
    );
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="flex min-h-screen w-full">
      <div className={`${backgroundColor} w-1/3 relative`}>
        <div className="fixed bottom-0 w-1/3">
          {additionalImage && (
            <div className="relative">
              <Image
                src={additionalImage}
                alt="Additional"
                width={50}
                height={50}
                className="w-6/12 ml-12"
              />
            </div>
          )}
          <Image
            src={characterImage}
            alt="Character"
            width={50}
            height={50}
            className={`${testType === "TOEFL" ? "w-7/12" : "w-6/12"}`}
          />
        </div>
      </div>
      <div className="w-2/3 py-8 px-12 flex justify-center">
        <div className="flex flex-col gap-12 w-full max-w-3xl">
          <div className="w-full space-y-2">
            <MoveLeft
              className="text-black h-8 w-8 cursor-pointer"
              onClick={() => router.back()}
            />
            <h1 className="text-center font-bold text-3xl">
              All set!{" "}
              {testType === "IELTS"
                ? "Practice IELTS with AI-driven feedback"
                : "Sign up to increase your TOEFL IBT score"}
            </h1>
          </div>
          <div className="w-full justify-center items-center">
            <div className="space-y-4 px-12">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full border border-black"
              >
                <Image
                  src={fb}
                  alt="Facebook Logo"
                  width={20}
                  height={20}
                  className="h-4 w-4"
                />
                Continue with Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full relative flex items-center justify-center gap-2 h-12 rounded-full border border-black"
              >
                <Image
                  src={google}
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="h-4 w-4"
                />
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-2 border-black rounded-full" />
                </div>
                <div className="relative flex justify-center text-md">
                  <span className="bg-background px-4">or</span>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="h-12 border-black mt-2 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="h-12 border-black mt-2 rounded-xl"
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
                              placeholder="Your Password"
                              {...field}
                              className="h-12 border-black mt-2 rounded-xl"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              className="absolute right-0 top-[8px] h-12 border-black mt-2 rounded-xl w-12 px-0 hover:bg-transparent"
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
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {"What's your gender? (optional)"}
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4 mt-2 ml-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="man" id="man" />
                              <Label htmlFor="man">Man</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="woman" id="woman" />
                              <Label htmlFor="woman">Woman</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormItem>
                    <FormLabel>{"What's your birth date?"}</FormLabel>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <FormField
                        control={form.control}
                        name="birthMonth"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Month" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem
                                  key={month}
                                  value={month.toString()}
                                >
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Date" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {days.map((day) => (
                                <SelectItem key={day} value={day.toString()}>
                                  {day}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="birthYear"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>

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

                  <p className="text-sm text-center px-2">
                    By clicking Continue or Sign up, you agree to{" "}
                    <Link href="#" className="underline font-bold">
                      NGILINGO
                    </Link>{" "}
                    Terms of Use, including{" "}
                    <Link href="#" className="underline font-bold">
                      Subscription Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline font-bold">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <Button
                    type="submit"
                    className={`w-full h-12 ${buttonColor} rounded-full border border-black text-black`}
                  >
                    Sign Up
                  </Button>
                </form>
              </Form>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-black font-bold underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? modalCategory(testType) : null}
    </section>
  );
};

export default TestSignUp;
