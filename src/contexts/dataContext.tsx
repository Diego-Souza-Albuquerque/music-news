"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type DataContextType = {
  handleFetchNews: () => void;
  handleSelectPage: (index: number) => void;
  news: any;
  page: number | undefined;
};

type SelectecPage = number;

const DataContext = createContext({} as DataContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [data, setDatas] = useState([]);
  const [selectedPage, setSelectedPage] = useState<SelectecPage>();

  const handleSelectPage = (index: number) => {
    setSelectedPage(index);
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
      setDatas(data?.data);
    } catch (error) {}
  }

  return (
    <DataContext.Provider
      value={{
        news: data,
        handleFetchNews,
        handleSelectPage,
        page: selectedPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  return context;
}
