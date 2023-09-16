import React from "react";
import { Share_Tech_Mono } from "next/font/google";

const share = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const BufferSection = () => {
  return (
    <div className="">
      <section
        className={`h-[50vh] bg-no-repeat bg-cover bg-center  bg-fixed bg-[url('https://images.pexels.com/photos/7443909/pexels-photo-7443909.jpeg?auto=compress&cs=tinysrgb&w=1600')]`}
      >
        <div className=" flex justify-center items-center h-full bg-[#000000a8]">
          <h1
            className={`${share.className} text-4xl text-center  self-center  w-full mx-20`}
          >
            Visualize your favorite characters with Essay Generation. Use
            powerful Word models to depict characters and moments from your
            stories, with the leading Essay Collection AI and other AI models.
          </h1>
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default BufferSection;
