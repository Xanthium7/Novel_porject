import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineTeam } from "react-icons/ai";

const AboutTeam = () => {
  return (
    <div>
      <section className="h-[100vh] mx-20">
        <div className="h-[20vh] flex items-center justify-center">
          <h1 className="text-center text-5xl">Our Team</h1>
        </div>

        <div className="flex justify-center ">
          <div
            className="text-container text-2xl w-1/2 
           flex flex-col justify-center text-right"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate eum doloribus consequuntur ipsa omnis mollitia incidunt
              rem doloremque cupiditate et!
            </p>
            <div className="flex justify-end ">
              <Link
                className=" mt-3 flex gap-1 text-white  text-xl rounded-md border-2 px-10 py-4 hover:bg-[#c8c8c8e3] hover:text-black transition ease-out duration-150"
                href={""}
              >
                Visit Me
                <AiFillGithub className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="w-1/2 flex justify-center">
            <Image src={"/imgs/img1.jpg"} width={400} height={500}></Image>
          </div>
        </div>
        {/* breker */}
        <div className="h-[10vh]"></div>
        {/* breaker */}
        <div className="flex justify-center ">
          <div className="w-1/2 flex justify-center">
            <Image src={"/imgs/img2.jpg"} width={400} height={500}></Image>
          </div>
          <div
            className="text-container text-2xl w-1/2 
          ml-10 flex flex-col justify-center text-left"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate eum doloribus consequuntur ipsa omnis mollitia incidunt
              rem doloremque cupiditate et!
            </p>
            <div className="flex ">
              <Link
                className=" mt-3 flex gap-1 text-white  text-xl rounded-md border-2 px-10 py-4 hover:bg-[#c8c8c8e3] hover:text-black transition ease-out duration-150"
                href={""}
              >
                Visit Me
                <AiFillGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        {/* breker */}
        <div className="h-[10vh]"></div>
        {/* breaker */}
        <div className="flex justify-center ">
          <div
            className="text-container text-2xl w-1/2 
           flex flex-col justify-center text-right"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate eum doloribus consequuntur ipsa omnis mollitia incidunt
              rem doloremque cupiditate et!
            </p>
            <div className="flex justify-end ">
              <Link
                className=" mt-3 flex gap-1 text-white  text-xl rounded-md border-2 px-10 py-4 hover:bg-[#c8c8c8e3] hover:text-black transition ease-out duration-150"
                href={""}
              >
                Visit Me
                <AiFillGithub className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="w-1/2 flex justify-center">
            <Image src={"/imgs/img3.jpg"} width={400} height={500}></Image>
          </div>
        </div>
        {/* breker */}
        <div className="h-[10vh]"></div>
        {/* breaker */}
      </section>
    </div>
  );
};

export default AboutTeam;
