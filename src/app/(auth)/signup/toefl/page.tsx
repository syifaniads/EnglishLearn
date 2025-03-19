import TestSignUp from "@/components/ui/testSignUp";
import char from "@public/assets/character/toeflM1.svg";
import bubble from "@public/assets/frag/bubble.svg";

export const metadata = {
  title: "Sign up TOEFL",
  description: "TOEFL and IELTS preparation",
};

export default function ToeflSignUp() {
  return (
    <TestSignUp
      testType="TOEFL"
      backgroundColor="bg-[#00D7FF]"
      buttonColor="bg-cyan-400 hover:bg-cyan-500"
      characterImage={char}
      additionalImage={bubble}
    />
  );
}
