import {getStepsData} from "../../../dummy-cleaning-site-data";
import StepCard from "../StepCard/stepcard";
import Button from "../Button/index";
import Image from "next/dist/client/image";

const Booking_Steps = () => {
  const stepsData = getStepsData();

  return (
    <div className=" bg-stone-100  h-auto ">
      <div className=" text-center align-middle  items-center  text-stone-700 py-24">
        <div className="flex flex-row justify-center align-middle items-center text-center  ">
          <div className=" rounded-full  text-3xl  align-middle justify-center text-center ">
            <img src="../images/3stp.svg" />
          </div>
          <div className="mx-4 uppercase font-semibold text-3xl  ">
            Simple Steps
          </div>
        </div>
        <div className=" text-center align-middle flex justify-center flex-col items-center">
          <div className=" text-xl text-stone-400 text-center my-8">
            To Hire Cleaning Services Professionals
          </div>

          <div className="container mx-auto space-x-auto flex flex-row ">
            {stepsData.map((data) => (
              <div className="w-1/3 text-center align-middle  p-2 m-8 justify-center">
                <StepCard
                  title={data.title}
                  stepimg={data.stepimg}
                  image={data.image}
                  desc={data.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" text-center align-middle flex justify-center  flex-col items-center">
          <Button type="primery">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Booking_Steps;
