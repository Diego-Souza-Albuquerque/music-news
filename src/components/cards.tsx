"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/contexts/dataContext";

type NewsType = {
  id: number;
  attributes: {
    titulo: string;
    subtitulo: string;
    autor: string;
    data: string;
    thumbnail: any;
    legedaFoto: string;
    texto1: string;
    texto2: string;
  };
};

export default function Card() {
  const { handleFetchNews, handleSelectPage, news } = useData();
  const router = useRouter();

  const handleOpenNews = (tittle: string) => {
    router.push(`/${tittle}`);
  };

  console.log(news);

  useEffect(() => {
    handleFetchNews();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-14 justify-center">
        {news?.map((item: NewsType, index: number) => (
          <div
            key={index}
            onClick={() => {
              handleSelectPage(index);
              handleOpenNews(item.attributes.titulo);
            }}
            className="h-[350px] w-[380px] rounded-lg flex flex-col gap-2 border-[1px] border-gray-300 hover:shadow-lg"
          >
            <Image
              src={`${process.env.STRAPI_URL}${item.attributes.thumbnail.data.attributes.url}`}
              alt="cardImage"
              width={500}
              height={500}
              className="h-[190px] w-[400px] rounded cursor-pointer"
            />
            <div className="p-3">
              <span className="text-gray-500 text-sm cursor-pointer">
                {item.attributes.data}
              </span>
              <span className="text-gray-800 text-start cursor-pointer">
                <h1 className="text-xl font-[600]">{item.attributes.titulo}</h1>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
