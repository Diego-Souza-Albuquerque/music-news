"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function CardTwo() {
  const router = useRouter();

  const [news, setNews] = useState([]);

  const handleOpenNews = (id: number) => {
    router.push(`/${id}`);
  };

  async function handleFetchNews() {
    try {
      const response = await fetch(
        `${process.env.STRAPI_URL}/api/news?populate=*`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setNews(data?.data);
    } catch (error) {}
  }

  console.log(news);

  useEffect(() => {
    handleFetchNews();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-14 justify-center my-10">
        {news?.map((item: NewsType, index: number) => (
          <div
            key={index}
            onClick={() => {
              handleOpenNews(item.id);
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
