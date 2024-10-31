import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className='container w-3/5 p-4 mx-auto flex flex-col gap-4'>
      <h1 className='font-semibold text-center text-2xl'>
        What would you like to know?
      </h1>
      <div className='bg-accent flex flex-col p-2 gap-2 rounded-lg '>
        <div className='flex gap-2 items-center '>
          <Input
            className='border-none focus-visible:ring-0 shadow-none'
            placeholder="Summarize the current presidential candidates' platforms"
          />
          <Button className='p-2 size-6 bg-muted/80 hover:bg-muted rounded-full'>
            <ArrowRight className='text-primary' />
          </Button>
        </div>
        <div className='flex justify-between px-1'>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </div>
      </div>
    </div>
  );
}
