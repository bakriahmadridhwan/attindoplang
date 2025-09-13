import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <DarkmodeToggle />
      <Button>Button</Button>
    </div>
  );
}
