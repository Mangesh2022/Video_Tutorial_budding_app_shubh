const Footer = () => {
  return (
    <div className="w-full container border-t mx-auto md:pt-14 ">
      <div className="md:mx-24   ">
        <div className="w-full flex md:flex-row flex-col ">
          <div className="md:w-2/5 my-8 w-full flex flex-col justify-center align-middle items-center text-center ">
            <div className="justify-center align-middle items-center text-center w-52  md:w-52 h-52 ">
              <img src="images/Logo.jpg" alt="logoimg" />
            </div>
            <div className="flex flex-row justify-center align-middle items-center text-center">
              <img src="images/fb.svg" alt="logoimg" className="mx-8  w-8" />
              <img src="images/p.svg" alt="logoimg" className="mr-8 w-8" />
              <img src="images/yt.svg" alt="logoimg" className="mr-8 w-8" />
              <img src="images/li.svg" alt="logoimg" className="mr-8 w-8" />
            </div>
          </div>
          <div className="md:w-3/5 mx-4 flex flex-row text-gray-700 tracking-wider text-xl justify-between align-middle items-start text-left">
            <div className=" md:w-1/3 w-1/2 flex flex-col ">
              <div className="font-semibold mb-10 text-2xl">Service</div>
              <div className=" mb-10">Webinar</div>
              <div className=" mb-10">Workshop</div>
              <div className=" mb-10">Courses</div>
              <div className=" mb-10">Live Projects</div>
            </div>
            <div className=" md:w-1/3 w-1/2 flex flex-col ">
              <div className="font-semibold mb-10 text-2xl">Company</div>
              <div className=" mb-10">About Us</div>
              <div className=" mb-10">Contact Us</div>
              <div className=" mb-10">Private Policy</div>
              <div className=" mb-10">Terms and Condition</div>
            </div>
            <div className=" md:w-1/3  flex flex-col ">
              <div className="font-semibold mb-10 text-2xl">More</div>
              <div className=" mb-10">Careers</div>
              <div className=" mb-10">Join and Trainer</div>
              <div className=" mb-10">Refund Policy</div>
            </div>
          </div>
        </div>
        <div className="my-28 text-xl text-gray-700 flex justify-center">
          Copyright © 2022 | Budding Analyst
        </div>
      </div>
    </div>
  );
};

export default Footer;
