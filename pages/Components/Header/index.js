import Navigation from "../Navigation/Navigation";
import Logo from "../../Components/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" absolute z-50 w-full bg-stone-100   md:fixed ">
      <div className="container mx-auto  ">
        <div className="flex flex-row items-center ">
          <div className=" flex justify-end  ">
            <Logo />
          </div>
          <div className=" w-full  flex justify-center">
            <Navigation />
          </div>
          <div className="text-sm font-bold">
            <Link href="/RegForm">
              <a>Login</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
