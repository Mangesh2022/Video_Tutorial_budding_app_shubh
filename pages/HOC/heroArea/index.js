import Image from "next/image";

const Hero_Area = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center align-middle  items-center md:text-left relative ">
        <div className=" w-full absolute z-10  ">
          <div className="  md:flex  md:m-auto p-4 rounded-lg ">
            <div className="md:w-1/2"></div>
            <div className=" md:w-1/2 mt-80 md:mx-auto md:mr-8 md:mt-40 flex flex-col  w-full justify-start  text-start align-top items-start ">
              <div className=" md:flex h-auto py-4 text-3xl md:text-5xl md:font-semibold md:tracking-widest text-gray-900   ">
                Explore New Skills <br />
                from your passions
              </div>
              <div className="font-light md:text-justify tracking-wider md:py-10   text-gray-500 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="mt-8 w-full md:auto justify-center md:justify-between flex flex-row border rounded-sm  align-middle  items-center">
                <input
                  type="text"
                  placeholder="Your Email or Phone no."
                  className="  px-4 py-4  w-4/6  "
                />
                <button className="bg-blue-900 w-2/6 py-4  px-2 text-white rounded-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" top-0 left-0 h-screen   w-full relative ">
          <Image
            src={"/images/Heroimg2.jpg"}
            layout="fill"
            className="object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero_Area;
