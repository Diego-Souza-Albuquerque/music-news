import Card from "@/components/cards";
import FirstCard from "@/components/firstCard";

export default function Home() {
  return (
    <main className="flex bg-gray-100 min-h-screen flex-wrap items-center justify-center gap-10 px-20 py-10">
      <div className="mt-32 sm:mt-12 mx-auto relative overflow-hidden rounded max-h-[300px] w-full">
        <FirstCard />
      </div>
      <div>
        <Card />
      </div>
    </main>
  );
}
