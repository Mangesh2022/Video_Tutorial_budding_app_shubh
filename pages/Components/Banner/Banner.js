import Button from "../Button/index";
import Image from "next/dist/client/image";

const Banner = () => {
  return (
    <div className="my-24  relative  ">
      <div className="container mx-auto ">
        <div className=" px-8 py-44 flex flex-row">
          <div className="text-stone-700 py-10 text-3xl font-bold w-1/2 ">
            See More Testimonial
          </div>
          <div className="text-white items-center  flex justify-start  text-sm pr-44 leading-6">
            “Just want to let you know that I’m very pleased with the cleaning
            job you did. Excellent job! Looks like new! Thanks.” Thanks, Steve
            Hunter “It’s amazing what two kids can do to a carpet… spills &
            spots everywhere! I had no idea it could get this clean.”
          </div>
        </div>
      </div>
      <div className="absolute  top-0 left-0 h-full -z-10  w-full">
        <Image
          src={"/images/banner2.png"}
          layout="fill"
          className=""
          //className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Banner;
