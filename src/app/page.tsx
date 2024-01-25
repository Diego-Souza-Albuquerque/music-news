import Card from "@/components/cards";
import CardTwo from "@/components/cards2";
import FirstCard from "@/components/firstCard";

export default function Home() {
  return (
    <main className=" bg-gray-100 min-h-screen px-20 py-10">
      <div className="mt-32 sm:mt-12 mx-auto relative top-0 overflow-hidden rounded max-h-[320px] w-full">
        <FirstCard />
      </div>
      <div>
        <CardTwo />
      </div>
    </main>
  );
}
