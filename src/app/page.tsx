import Prompt from "@/components/dashboard/prompt";

export default function Home() {
  return (
    <div className='container w-3/5 p-4 mx-auto flex flex-col gap-4'>
      <h1 className='font-semibold text-center text-2xl'>
        What would you like to know?
      </h1>
      <Prompt />
    </div>
  );
}
