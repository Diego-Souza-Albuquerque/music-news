"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FirstCard() {
  return (
    <div className="relative h-full w-full rounded flex flex-col justify-center items-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 12, repeat: Infinity }}
        className="relative w-full h-full rounded"
      >
        <Image
          src="/image1.jpg"
          alt=""
          width={1200}
          height={1200}
          className="aspect-[5/2] w-full object-cover rounded brightness-50"
        />
      </motion.div>
      <span className="absolute top-36 flex flex-col gap-2 items-start px-4 text-white ">
        <h1 className="text-3xl font-[700] tracking-wide">
          As melhores notícias no mundo da música, você encontra aqui
        </h1>
      </span>
    </div>
  );
}
