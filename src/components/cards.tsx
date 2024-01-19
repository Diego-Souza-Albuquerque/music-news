"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Attributes = {
  index: number;
  title: string;
  date: string;
  image: string;
};

export default function Card() {
  const [data, setDatas] = useState([]);
  /* const news: NewsItem[] = [/
    {
      title:
        "‘Reinvenção completa’, afirma Vox sobre miniamplificadores amPlug3",
      date: "19/01/2024",
      image: "/image1.webp",
    },
    {
      title:
        "Mateus Asato anuncia ‘primeiro e único’ show no Brasil; ingressos esgotam em poucas horas",
      date: "19/01/2024",
      image: "/image2.png",
    },
    {
      title:
        "O problema da Les Paul e o segredo da Telecaster, segundo Joe Satriani",
      date: "19/01/2024",
      image: "/image3.webp",
    },
    {
      title:
        "Satriani considera valvulados muito superiores às simulações: ‘Sem comparação’",
      date: "19/01/2024",
      image: "/image4.webp",
    },
    {
      title:
        "Satriani considera valvulados muito superiores às simulações: ‘Sem comparação’",
      date: "19/01/2024",
      image: "/image4.webp",
    },
    {
      title:
        "Satriani considera valvulados muito superiores às simulações: ‘Sem comparação’",
      date: "19/01/2024",
      image: "/image4.webp",
    },
  ]; */

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
      setDatas(data?.data);
    } catch (error) {}
  }

  useEffect(() => {
    handleFetchNews();
  }, []);

  console.log(data?.[0]);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        {data?.map((item: any) => (
          <div
            key={item.attributes.index}
            className="h-full w-[400px] rounded-lg flex flex-col gap-2"
          >
            <Image
              src={`${process.env.STRAPI_URL}${item.attributes.Thumbnail.data.attributes.url}`}
              alt="cardImage"
              width={500}
              height={500}
              className="h-[190px] w-[400px] rounded"
            />
            <p className="text-gray-500 text-sm">{item.attributes.Data}</p>
            <span className="text-gray-800 text-start">
              <h1 className="text-xl font-[600]">{item.attributes.Title}</h1>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
