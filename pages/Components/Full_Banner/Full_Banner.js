import Button from "../Button/index";
import Image from "next/dist/client/image";

const FullBanner = () => {
  return (
    <div className="my-24  relative  ">
      <div className="container mx-auto ">
        <div className="w-1/2 px-8 py-20 flex flex-col">
          <div className="text-white text-2xl tracking-widest ">
            Wooden flooring cleaing
          </div>
          <div className="text-stone-700 py-10 text-7xl font-thin">
            Is Your Source
            <br /> For Expert
            <br /> Wooden floor
          </div>
          <div className="text-stone-500 text-sm pr-20 leading-6">
            We guarantee satisfaction. Just call us within 30 days of service
            and we’ll return to your home to remedy the problem.
          </div>
          <div className="flex py-10">
            <div className="flex bg-stone-700  py-2 px-4  items-center text-white font-medium text-xl tracking-widest  flex-row justify-center align-middle text-center mx-2">
              <div>
                <img src="../images/call logo white.svg" className="mr-2" />
              </div>
              <div className="ml-2">+91 99999999</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  top-0 left-0 h-full -z-10  w-full">
        <Image
          src={"/images/bannerbg.png"}
          layout="fill"
          className=""
          //className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default FullBanner;
