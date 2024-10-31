import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className='container w-3/5 p-4 border mx-auto flex flex-col gap-4'>
      <h1 className='font-semibold text-center text-2xl'>
        What would you like to know?
      </h1>
      <div className='px-8'>
        <Input />
      </div>
    </div>
  );
}
