import React from "react";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import { AiFillGithub, AiOutlineTeam } from "react-icons/ai";

const share = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const MoreInfo = () => {
  return (
    <div className=" bg-[#000000cf] text-white  ">
      <div className="flex justify-center items-center mx-20  h-[80vh] ">
        <div
          className={`${share.className} text-justify text-holder w-1/2 text-lg`}
        >
          What even is <span className="text-5xl">NovelAI?</span>
          <br />
          <br />
          <span className="text-xl">
            Sequi NovelAI is a monthly subscription service for AI-assisted
            authorship, storytelling, virtual companionship, or simply a LLM
            powered sandbox for your imagination
          </span>
          <br />
          <br />
          <span className="text-[#ffffff9f]">
            Our Artificial Intelligence algorithms create human-like writing
            based on your own, enabling anyone, regardless of ability, to
            produce quality literature. We offer unprecedented levels of freedom
            with our Natural Language Processing playground by using our own AI
            models, trained on real literature. The AI seamlessly adapts to your
            input, maintaining your perspective and style.
          </span>
          <div className="flex mt-10 gap-5">
            <Link
              className="text-white text-xl rounded-sm border-2 px-10 py-5 hover:bg-[#c8c8c8e3] hover:text-black transition ease-out duration-150"
              href={"#features"}
            >
              Our Features
            </Link>
            <Link
              className="flex gap-1 text-white text-xl rounded-sm border-2 px-10 py-5 hover:bg-[#c8c8c8e3] hover:text-black transition ease-out duration-150"
              href={"https://github.com/hrithikvinayakr/nah"}
            >
              Visit Us on Github <AiFillGithub className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="img-holder w-1/2 mx-10 pl-10 h  ">
          <video autoPlay muted loop>
            <source src="/vids/start.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
