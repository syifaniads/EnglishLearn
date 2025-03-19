import TestSignUp from "@/components/ui/testSignUp";
import char from "@public/assets/character/ieltsF1.svg";
import bubble from "@public/assets/frag/bubble.svg";

export const metadata = {
  title: "Sign up IELTS",
  description: "TOEFL and IELTS preparation",
};

export default function IeltsSignUp() {
  return (
    <TestSignUp
      testType="IELTS"
      backgroundColor="bg-[#FFD0FF]"
      buttonColor="bg-[#FFD0FF] hover:bg-pink-300"
      characterImage={char}
      additionalImage={bubble}
    />
  );
}
