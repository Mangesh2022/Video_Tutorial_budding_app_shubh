import Newsletter from "../Newsletter/Newsletter";
import Logo from "../Logo/index";
import {
  getCommercialData,
  getHomeImprovementData,
  getResidencialData,
} from "../../../dummy-cleaning-site-data";

const Footer = () => {
  const CommercialData = getCommercialData();
  const ResidenccialData = getResidencialData();
  const HomeImprovementData = getHomeImprovementData();

  return (
    <>
      <Newsletter />
      <div className="bg-white border"></div>
      <div className="bg-stone-800 py-24">
        <div className="container mx-auto flex flex-row">
          <div className=" border-r border-white m-4 w-2/5 mx-10 ">
            <div className="flex flex-col mx-20">
              <div className="text-center flex flex-col justify-center items-center align-middle">
                <div>
                  <Logo />
                </div>
                <div className="text-white text-xl pt-2 pb-8">GET IN TOUCH</div>
              </div>
              <div className="flex flex-row items-left text-left align-middle justify-left">
                <div>
                  <img src="../images/call_logo.svg" />
                </div>
                <div className="text-stone-300 pl-8 text-xl ">
                  +91 9999999999
                </div>
              </div>
              <div className="flex flex-row my-4 items-center align-middle justify-left">
                <div>
                  <img src="../images/locationlogo.svg" />
                </div>
                <div className="text-stone-300 pl-8 text-xl ">
                  44/45 Raju Enclave
                  <br />
                  Old Palam Road Dwarka Sec-15
                  <br /> New Delhi-110078
                </div>
              </div>
              <div className="flex flex-row  items-left align-middle justify-left">
                <div>
                  <img src="../images/Maillogo.svg" />
                </div>
                <div className="text-stone-300 pl-8 text-xl ">
                  Email: Info@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="text-left  text-stone-200 flex flex-col m-4 w-1/5 ">
            <div className="text-left text-xl pb-6 text-stone-400 font-medium uppercase">
              RESIDENTIAL SERVICES
            </div>
            <ul>
              {ResidenccialData.map((data) => (
                <li className="pt-2 hover:text-gray-50">
                  <a href="/">{data.description}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left  text-stone-200 flex flex-col m-4 w-1/5 ">
            <div className="text-left text-xl pb-6 font-medium text-stone-400 uppercase">
              COMMERCIAL SERVICES
            </div>
            <ul>
              {CommercialData.map((data) => (
                <li className="pt-2 hover:text-gray-50">
                  <a href="/">{data.description}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left  text-stone-200 flex flex-col m-4 w-1/5 ">
            <div className="text-left text-xl pb-6  text-stone-400 font-medium uppercase">
              Home Improvements
            </div>
            <ul>
              {HomeImprovementData.map((data) => (
                <li className="pt-2 hover:text-white">
                  <a href="/">{data.description}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex">
              <img src="../images/fb.svg " className="w-8 h-8 mr-8" />
              <img src="../images/yt.svg " className="w-8 h-8 mr-8" />
              <img src="../images/tw.svg " className="w-8 h-8 mr-8" />
            </div>
            <div className="mt-4 flex">
              <img src="../images/p.svg " className="w-8 h-8 ml-8" />
              <img src="../images/li.svg " className="w-8 h-8 ml-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto text-stone-500"> @ All rights</div>
      </div>
    </>
  );
};

export default Footer;
