import { Share_Tech_Mono } from "next/font/google";

const share = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const FeaturesPage = () => {
  return (
    <div id="features" className={`${share.className} flex`}>
      <section className="h-[80vh] justify-center items-center w-full">
        <h1 className="text-center text-5xl mt-20">Features</h1>
        <div className="flex gap-10 w-full  justify-center mt-20">
          <div className="h-[40vh] w-[35vh]  rounded-md border-2 border-[#b9b9b9c4]">
            <h1 className="text-center text-2xl mt-5">
              AI INTERGRATED ESSAY WRITING <hr className="mx-20 mt-3" />
            </h1>

            <p className="text-center mt-16">
              This Project Build on novel Ai is capable of generating live AI
              responses for the given queries, however this feature is currently
              inasscible due to lack of API key, visit GIT repo for further info
            </p>
          </div>
          <div className="h-[40vh] w-[35vh]  rounded-md border-2 border-[#b9b9b9c4]">
            <h1 className="text-center text-2xl mt-5">
              COMPLETELY CUSTOMISABLE EDITOR <hr className="mx-20 mt-3" />
            </h1>
            <p className="text-center mt-20">
              Fully Customisable text editor with ALL the edits and
              customisations available
            </p>
          </div>
          <div className="h-[40vh] w-[35vh]  rounded-md border-2 border-[#b9b9b9c4]">
            <h1 className="text-center text-2xl mt-5">
              DATA SAVING PROGRESS STORAGE
              <hr className="mx-20 mt-3" />
            </h1>
            <p className="text-center mt-20">
              Established Storage system for individual records recorded in the
              editor, Local storage intergration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
