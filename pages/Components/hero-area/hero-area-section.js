import {data} from "autoprefixer";
import {
  getAllHeroData,
  getFeaturedHeroData,
} from "../../../dummy-cleaning-site-data";

import Image from "next/image";
import Logo from "../Logo/index";
import Button from "../Button";

const Hero_Area = () => {
  const HeroData = getAllHeroData();

  return (
    <>
      <div className="w-full h-screen ">
        <div className="relative flex flex-col container mx-auto justify-center md:pb-96 md:pt-60   items-center text-center align-middle z-10">
          <div className="  text-stone-700 font-extralight font-sans flex-col w-full">
            <div className="flex animate-pulse justify-center my-8 ">
              <img src="../images/centerlogo.svg" />
            </div>
            {HeroData.map((data) => (
              <div className="  ">
                <div className="  border-black text-8xl pt-8 text-stone-700  font-bold ">
                  {data.title}
                </div>
                <div className="my-10 text-stone-500 text-3xl ">
                  {data.description}
                </div>
              </div>
            ))}
          </div>
          <div className="my-24  w-full">
            <Button type="primery">Booking Now</Button>
          </div>
        </div>
        <Image
          src={"/images/Hero-BG.png"}
          layout="fill"
          className="absolute "
          //className="object-cover object-center"
        />
      </div>
    </>
  );
};

export default Hero_Area;
