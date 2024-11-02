import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Layers3, Paperclip } from "lucide-react";

export default function Home() {
  return (
    <div className='container w-3/5 p-4 mx-auto flex flex-col gap-4'>
      <h1 className='font-semibold text-center text-2xl'>
        What would you like to know?
      </h1>
      <div className='bg-accent flex flex-col p-2 gap-2 rounded-lg '>
        <div className='flex gap-2 items-center '>
          <Textarea
            className='focus-visible:ring-0 shadow-none resize-none h-2 border-none text-base'
            placeholder="Summarize the current presidential candidates' platforms"
          />
        </div>
        <div className='flex justify-between items-center px-2'>
          <div className='space-x-1'>
            <Button variant='ghost' className='py-1 px-2 rounded-2xl'>
              <Layers3 />
              Focus
            </Button>
            <Button variant='ghost' className='py-1 px-2 rounded-2xl'>
              <Paperclip /> Add
            </Button>
          </div>
          <Button className='p-2 mr-3 size-7 bg-muted/80 hover:bg-muted hover:scale-110 rounded-full duration-300'>
            <ArrowRight className='text-primary' />
          </Button>
        </div>
      </div>
    </div>
  );
}
