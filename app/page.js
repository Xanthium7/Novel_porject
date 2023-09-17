import Image from "next/image";
import { Editor } from "novel";
import { Share_Tech_Mono } from "next/font/google";
import MoreInfo from "./components/MoreInfo";
import BufferSection from "./components/BufferSection";
import AboutTeam from "./components/AboutTeam";
import FeaturesPage from "./components/FeaturesPage";

const share = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Ask me something.." }],
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center test">
        <div className="  ">
          <h1
            className={`${share.className} text-white text-center text-5xl mb-10 `}
          >
            EssaI Ai
          </h1>
          <Editor
            className="overflow-y-scroll text-white bg-[#000000bd]  max-h-[50vh] min-w-[100vh] max-w-[100vh] min-h-[50vh] border-solid border-1 border-[#222222ee] rounded-3xl"
            defaultValue={defaultEditorContent}
          />
        </div>
      </div>
      <MoreInfo></MoreInfo>
      <BufferSection />
      <FeaturesPage></FeaturesPage>
      <AboutTeam></AboutTeam>
    </>
  );
}
