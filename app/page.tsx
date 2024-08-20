import Avatar from "@/components/atoms/avatar";
import ComponentShowcase from "@/components/component-showcase";
import { IoLogoWebComponent } from "react-icons/io5";
import fs from "fs";
import AddYourPrompt from "@/components/atoms/add-your-prompt";

export default function Home() {
  const components = fs.readdirSync("components/atoms");

  return (
    <div className="w-full sm:max-w-[144rem] justify-start flex flex-col px-[2rem] sm:px-[15rem] py-16">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-x-2">
          <div className="p-1 size-8 rounded-[.3rem] border border-zinc-800 flex items-center justify-center text-zinc-300 bg-gradient-to-br from-black to-zinc-800">
            a
          </div>

          <h1 className="text-white font-semibold text-xl">almanaq</h1>
        </div>

        <div className="flex items-center gap-x-2">
          <IoLogoWebComponent className="text-zinc-400" />

          <h3 className="text-zinc-400">
            {components.length} component{components.length > 1 && "s"}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="mt-8 text-zinc-400 border-l border-zinc-400 pl-2">
          this is a project I created to showcase my skills and knowledge in
          design engineering. all the components are created using tailwind +
          tailwind-variants + framer-motion
        </p>

        <a
          href="https://twitter.com/ducaswtf"
          target="_blank"
          className="text-zinc-400 font-medium underline"
        >
          Igor Duca
        </a>
      </div>

      <div className="mt-16 h-full flex flex-col gap-y-16">
        <ComponentShowcase
          component={
            <Avatar
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Avatar"
              size="md"
              name="John Doe"
            />
          }
          title="Avatar"
          description="An animated avatar component created using tailwind + tailwind-variants + framer-motion"
          tags={["avatar", "tailwind", "tva", "framer-motion"]}
          createdAt={1724124087195}
        />

        <ComponentShowcase
          component={<AddYourPrompt />}
          title="Add AI Prompt"
          description="An animated button that turns into a prompt input modal when clicked. This component is created using tailwind + tailwind-variants + framer-motion"
          tags={["AI", "prompt", "tailwind", "tva", "framer-motion"]}
          createdAt={1724124087195}
        />
      </div>
    </div>
  );
}
