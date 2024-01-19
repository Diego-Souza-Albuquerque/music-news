"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FirstCard() {
  return (
    <div className="relative h-full w-full rounded flex flex-col justify-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 12, repeat: Infinity }}
        className="relative w-full h-full rounded"
      >
        <Image
          src="/image.webp"
          alt=""
          width={1200}
          height={1200}
          className="aspect-[5/2] w-full object-cover rounded"
        />
      </motion.div>
      <span className="absolute flex flex-col gap-2 items-start px-4 text-white ">
        <h1 className="text-3xl font-[600]">
          Tarraxas alteram som da guitarra?
        </h1>
        <h2 className="text-lg font-[500]">
          Segundo Paul Reed Smith, tarraxas Wing Button geram menos
          interferência no comportamento das cordas
        </h2>
      </span>
    </div>
  );
}
