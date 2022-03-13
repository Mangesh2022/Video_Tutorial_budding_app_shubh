import Logo from "../../Components/Logo/index";
import Navigation from "../../Components/Navigation/index";
import Signin from "../../Components/Sign in/index";
import SignOut from "../../Components/signout/index";
import Search from "../../Components/Search/index";

const Header = () => {
  return (
    <div className=" flex  w-full px-4 py-4  z-500 ">
      <div className="  w-full  flex justify-between mx-0 mt-0  ">
        <div className=" flex flex-row align-middle justify-between w-full text-center items-center shadow-gray-100   shadow ">
          <div className="w-1/3 md:hidden ml-4">
            <img src="images/list.svg" alt="" />
          </div>
          <div className="md:w-auto w-1/3 justify-center   md:flex ">
            <Logo />
          </div>
          <div className="md:flex w-1/3 md-w-auto   justify-end flex md:justify-right md:text-right md:items-center  md:align-middle   md:flex-row">
            <div className="md:block md:mx-auto md:w-auto md:justify-right md:text-right md:items-end  md:align-middle hidden  md:flex-row ">
              <div>
                <Navigation />
              </div>
            </div>
            <div className=" flex w-auto md:w-auto   justify-center text-right items-center align-center   flex-row md:p-2 md:mr-2 ">
              <Signin />
              <div className="hidden md:block">|</div>
              <div className="hidden md:block">
                <SignOut />
              </div>
            </div>
            <div className=" hidden md:block md:ml-2 border md:rounded-md p-2 ">
              <Search />
            </div>
            <div className="  md:w-auto  md:items-end md:flex md:flex-row ">
              <div className="flex flex-row justify-between md:ml-4 w-6 h-6  ">
                <img
                  src="images/notification.svg"
                  alt=""
                  className="md:w-auto hidden md:block md:h-auto"
                />
              </div>
              <div className="flex flex-row justify-between md:ml-4 w-6 h-6 ">
                <img
                  src="images/user.svg"
                  alt=""
                  className="w-auto hidden md:block h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
