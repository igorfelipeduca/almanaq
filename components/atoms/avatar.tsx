"use client";

import { motion, useAnimationControls } from "framer-motion";
import { LuUserCircle } from "react-icons/lu";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
import { toast } from "sonner";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  name: string;
}

export default function Avatar({ src, alt, size = "md", name }: AvatarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const avatarControls = useAnimationControls();
  const dropdownControls = useAnimationControls();

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);

    avatarControls.start({
      border: isOpen ? "none" : "2px solid #27272a",
      padding: isOpen ? "0" : "3px",
    });

    dropdownControls.start({
      opacity: isOpen ? 0 : 1,
      display: isOpen ? "none" : "flex",
      marginTop: isOpen ? "0" : ".5rem",
    });
  };

  return (
    <div className="flex flex-col items-center gap-x-2">
      <motion.img
        src={src}
        alt={`${alt} - ${name}`}
        initial={{ borderRadius: "100%" }}
        animate={avatarControls}
        className={`object-cover cursor-pointer ${
          size === "sm" ? "w-8 h-8" : size === "lg" ? "w-24 h-24" : "w-16 h-16"
        }`}
        onClick={handleAvatarClick}
      />

      <motion.div
        className="rounded-2xl w-[12rem] p-2 gap-y-2 flex flex-col border border-zinc-800"
        initial={{ opacity: 0, display: "none", marginTop: "0" }}
        animate={dropdownControls}
      >
        <AvatarDropdownOption icon={<LuUserCircle />} text="Profile" />
        <AvatarDropdownOption icon={<MdAttachFile />} text="Posts" />
        <AvatarDropdownOption icon={<HiOutlineCog6Tooth />} text="Settings" />
      </motion.div>
    </div>
  );
}

const AvatarDropdownOption = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  const handleDropdownOptionClick = (option: string) => {
    toast.success(`Option ${option} clicked`);
  };

  return (
    <div
      className="flex items-center gap-x-2 px-4 py-2 text-zinc-500 bg-zinc-900/40 transition-all duration-150 ease-linear hover:bg-zinc-900 cursor-pointer rounded-xl"
      onClick={() => handleDropdownOptionClick(text)}
    >
      {icon}
      {text}
    </div>
  );
};
