"use client";

import { motion } from "framer-motion";
import { LuClock10 } from "react-icons/lu";

interface ComponentShowcaseProps {
  component: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  createdAt: number;
}

export default function ComponentShowcase({
  component,
  title,
  description,
  tags,
  createdAt,
}: ComponentShowcaseProps) {
  return (
    <motion.div
      className="flex flex-col justify-start gap-y-8 h-full"
      layout
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <h3 className="text-zinc-200">{title}</h3>

          <CreatedAtBadge createdAt={createdAt} />
        </div>

        <p className="text-zinc-500">{description}</p>

        <div className="w-full grid grid-cols-2 sm:flex items-center gap-4 text-center mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="rounded-[.4rem] bg-zinc-900/70 px-4 py-1 text-sm text-zinc-500 border border-zinc-800"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="w-full h-auto transition-all duration-150 ease-linear rounded-2xl border border-zinc-800 p-6 flex justify-center"
        layout
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      >
        {component}
      </motion.div>
    </motion.div>
  );
}

const CreatedAtBadge = ({ createdAt }: { createdAt: number }) => {
  const convertDateToString = () => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="px-4 py-px flex items-center gap-x-2 rounded-full bg-zinc-950 border border-zinc-800">
      <LuClock10 />

      {convertDateToString()}
    </div>
  );
};
