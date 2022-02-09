import Button from "../Button/index";
const Newsletter = () => {
  return (
    <div className="bg-stone-100 text-stone-700">
      <div className="container flex-row flex mx-auto items-center align-middle  py-2 ">
        <div className="w-1/4 text-xl font-semibold ml-10 ">
          Sign up to Newsletter
        </div>
        <div className="w-1/4 text-sm font-extralight ">
          ...and receive 20 coupon On first Booking
        </div>
        <div className="w-2/4  ml-40 flex flex-row justify-end align-middle items-center ">
          <div className="mr-2  border w-full   bg-white text-stone-300 text-base p-1 text-left">
            <input
              placeholder="Enter your email address"
              type="text"
              className="w-full px-4 "
            />
          </div>
          <Button type="primery">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
