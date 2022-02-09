import {data} from "autoprefixer";
import {
  getAllHeroData,
  getFeaturedHeroData,
} from "../../../dummy-cleaning-site-data";

import Image from "next/image";
import Logo from "../Logo/index";

const Hero_Area1 = () => {
  const HeroData = getAllHeroData();

  return (
    <>
      <div className="w-full h-screen relative">
        <div className="relative flex container mx-auto justify-center md:pb-96 md:pt-60  py-auto  items-center text-center align-middle z-10">
          <div className="  text-amber-500 font-extralight font-sans flex-col w-full">
            <div className="bg-pink-300 bg-opacity-20 py-8 mx-32 rounded-lg">
              <div className="flex justify-center my-8 ">
                <img src="../images/centerlogo.svg" />
              </div>
              {HeroData.map((data) => (
                <div className="  ">
                  <div className=" font-thin text-5xl">{data.title}</div>
                  <div className="my-10 text-white text-3xl ">
                    {data.description}
                  </div>
                </div>
              ))}
              <div className="flex flex-row justify-center items-center mx-56 my-8 text-center align-middle py-8">
                <input
                  type="text"
                  placeholder="Please Search for Home Cleanig service "
                  className="p-2  border-2  rounded-l-md   w-full "
                />
                <div className="w-11 h-11 bg-purple-900 border px-10 rounded-r-md flex-row flex justify-center align-middle items-center text-center">
                  search
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full mt-14 bg-gray-800">
          <Image
            src={"/images/Hero-Bg.png"}
            layout="fill"
            className="bg-opacity-90"
            //className="object-cover object-center"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full mt-14 bg-gradient-to-r from-green-400 to to-green-400 opacity-60"></div>
      </div>
    </>
  );
};

export default Hero_Area1;

//        <img src="../images/BG.png" className="w-full absolute"></img>
