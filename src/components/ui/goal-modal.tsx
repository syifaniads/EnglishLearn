import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoalsModal() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center p-4 fixed inset-0 z-50 bg-black/50">
      <Card className="w-full max-w-lg rounded-3xl py-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">
            What&apos;s you&apos;re goals?
          </CardTitle>
          <p className="text-center font-medium">
            This will be your character scenario, so we can get along :&gt;
          </p>
        </CardHeader>
        <CardContent className="space-y-3 max-w-md mx-auto mt-4">
          <Button
            variant="outline"
            className="w-full h-12 justify-between gap-2 border-black rounded-xl group"
            onClick={() => router.push("/test/welcome")}
          >
            <GraduationCap className="h-5 w-5" />
            Exam and Academics
            <span className="w-4 h-4 border border-black rounded-full group-hover:bg-neutral-700" />
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 justify-between gap-2 border-black rounded-xl group"
            onClick={() => router.push("/test/welcome")}
          >
            <Briefcase className="h-5 w-5" />
            Business and Career
            <span className="w-4 h-4 border-black border rounded-full group-hover:bg-neutral-700" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
