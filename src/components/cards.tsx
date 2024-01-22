"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/contexts/dataContext";

type Attributes = {
  attributes: { Title: string; Data: string; Thumbnail: any };
};

export default function Card() {
  const { handleFetchNews, handleSelectPage, news } = useData();
  const router = useRouter();

  const handleOpenNews = (tittle: string) => {
    router.push(`/${tittle}`);
  };

  useEffect(() => {
    handleFetchNews();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-14 justify-center">
        {news?.map((item: Attributes, index: number) => (
          <div
            key={index}
            onClick={() => {
              handleSelectPage(index);
              handleOpenNews(item.attributes.Title);
            }}
            className="h-[350px] w-[380px] rounded-lg flex flex-col gap-2 border-[1px] border-gray-300 hover:shadow-lg"
          >
            <Image
              src={`${process.env.STRAPI_URL}${item.attributes.Thumbnail.data.attributes.url}`}
              alt="cardImage"
              width={500}
              height={500}
              className="h-[190px] w-[400px] rounded cursor-pointer"
            />
            <div className="p-3">
              <span className="text-gray-500 text-sm cursor-pointer">
                {item.attributes.Data}
              </span>
              <span className="text-gray-800 text-start cursor-pointer">
                <h1 className="text-xl font-[600]">{item.attributes.Title}</h1>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
