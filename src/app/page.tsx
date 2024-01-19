import Card from "@/components/cards";
import FirstCard from "@/components/firstCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-center gap-10 p-14">
      <div className="mt-32 sm:mt-12 mx-auto relative overflow-hidden rounded max-h-[300px]">
        <FirstCard />
      </div>
      <div>
        <Card />
      </div>
    </main>
  );
}
