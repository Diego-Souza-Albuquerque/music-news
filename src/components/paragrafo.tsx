"use client";
import { Fragment, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Paragrafo({ p }: { p: any }) {
  useEffect(() => {
    console.log("teste");
  }, [p]);

  return (
    <>
      <div className="mt-6 text-xl leading-8">
        {p.split("\n").map((paragraph: string, index: number) => (
          <Fragment key={index}>
            {ReactHtmlParser(paragraph)}
            <br />
          </Fragment>
        ))}
      </div>
    </>
  );
}
