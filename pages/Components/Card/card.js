import Button from "../Button";
import Link from "next/link";

const Card = (props) => {
  return (
    <>
      <div className="w-1/2 px-8 pb-20 ">
        <div className=" flex flex-col justify-start text-left">
          <div className="  ">
            <div>
              <img src={props.cardimg} className=" w-full h-72 bg-slate-500" />
            </div>
            <div className="bg-white py-4 ">
              <div className="flex flex-row items-center align-middle text-center justify-start">
                <div className="font-thin text-stone-400 tracking-widest mr-4 text-2xl">
                  {props.id}
                </div>
                <div className="text-stone-700 font-semibold text-xl">
                  {props.title}
                </div>
              </div>
              <div className="text-stone-500 my-2 font-extralight leading-8 ">
                {props.desc}new and best service in your area
              </div>

              <div className="flex flex-row justify-start">
                <Button>Book Now</Button>
                <img src="/images/right-arrow.png" className="w-5 mx-2 "></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
