"use client";

import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { BsStars } from "react-icons/bs";

export default function AddYourPrompt() {
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const buttonAnimateControls = useAnimationControls();
  const containerAnimateControls = useAnimationControls();
  const containerContentControls = useAnimationControls();

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newHeight = event.target.scrollHeight;
    setTextareaHeight(newHeight + "px");
  };

  const handleButtonClick = () => {
    buttonAnimateControls.start({ opacity: 0, display: "none" });

    containerAnimateControls.start({
      width: "25rem",
      height: "auto",
      padding: "1.5rem 1rem",
    });

    containerContentControls.start({
      opacity: 1,
      display: "flex",
      width: "100%",
    });
  };

  const handleRevertButtonClick = () => {
    containerContentControls
      .start({
        opacity: 0,
        transition: { duration: 0.2 },
      })
      .then(() => {
        containerContentControls.set({ display: "none", width: "0" });

        containerAnimateControls.start({
          width: "fit-content",
          height: "fit-content",
          padding: ".4rem 2rem",
          transition: { duration: 0.3 },
        });

        buttonAnimateControls.start({
          opacity: 1,
          display: "flex",
          transition: { duration: 0.3 },
        });
      });
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center">
      <motion.div
        className="justify-start items-center flex flex-col gap-y-2 bg-[#161716] rounded-xl border border-[#252725]"
        initial={{ width: "fit-content", padding: ".4rem 2rem" }}
        animate={containerAnimateControls}
      >
        <motion.div
          className="w-full flex justify-center gap-x-2 cursor-pointer"
          animate={buttonAnimateControls}
          initial={{ opacity: 1, display: "flex" }}
          onClick={handleButtonClick}
        >
          <BsStars className="mt-1" /> Add AI
        </motion.div>

        <motion.div
          animate={containerContentControls}
          initial={{ opacity: 0, display: "none" }}
          className="flex flex-col"
        >
          <div className="flex w-full justify-between items-center">
            <h3 className="text-zinc-400 font-medium">Input your prompt</h3>

            <IoIosClose
              className="text-zinc-400 size-7 cursor-pointer"
              onClick={handleRevertButtonClick}
            />
          </div>

          <div className="w-full rounded-[.7rem] border border-zinc-700 p-2 mt-4">
            <motion.textarea
              name="prompt"
              id="prompt"
              placeholder="Type your prompt here..."
              className="resize-none bg-inherit w-full h-auto outline-none text-zinc-500 placeholder:text-zinc-700"
              style={{ height: textareaHeight }}
              onChange={handleTextareaChange}
              animate={{ height: textareaHeight }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="w-full flex justify-between items-center mt-4">
            <div className="flex items-center gap-x-2">
              <div className="p-px bg-[#739f4c]/60 rounded-full">
                <div className="h-2 w-2 rounded-full bg-[#b8ff79]" />
              </div>

              <h3 className="text-zinc-400 font-medium text-sm">
                Waiting for user input
              </h3>
            </div>

            <button className="py-2 px-4 rounded-[0.5rem] text-sm bg-[#b8ff79] text-[#141612]">
              Generate
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
