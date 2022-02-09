import Button from "../Button";
import Image from "next/dist/client/image";

const CarCleaning = () => {
  return (
    <div className="my-48 container mx-auto ">
      <div className="  border mx-32 flex">
        <div className="w-1/2 p-10  relative">
          <div className="absolute  top-0 left-0 h-full -z-10  w-full">
            <Image
              src={"/images/carbg.png"}
              layout="fill"
              className=""
              //className="object-cover object-center"
            />
          </div>
        </div>
        <div className="w-1/2 p-10  bg-stone-100 flex-col flex">
          <div className="text-2xl tracking-widest text-stone-400">
            Welcome !
          </div>
          <div className="text-stone-700 text-5xl tracking-widest py-14">
            Professional Car
            <br /> Cleaning
            <br /> Services
          </div>
          <div className="text-stone-400  text-justify pr-10 leading-6">
            Regular vacuuming and stain-removal products can help, but they
            simply can’t match the cleaning power of professional carpet
            cleaning. CarpetServ can help remove the evidence of everyday living
          </div>
          <div className="pt-10 space-x-4 flex flex-row">
            <Button type="primery">COMMERCIAL</Button>
            <Button type="secondery">RESIDENCIAL</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCleaning;
