import {useState} from "react";

const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["sample 1", "sample 2", "sample 3"];
  return (
    <>
      <div className="relative  z-20   p-4 h-auto   ">
        <div
          className=" border flex flex-row justify-between px-2  lg:px-8 w-full  py-4 mt-4"
          onClick={(e) => setIsActive(!isActive)}
        >
          <div className="lg:w-1/2">Chapter 1</div>
          <div className="flex lg:w-1/2  justify-end text-right align-middle items-center flex-row">
            <div className="lg:mx-4   ">Estimated Time: 12 hr</div>
            <div className="lg:ml-4 px-1 ">img</div>
          </div>
        </div>
        {isActive && (
          <div className=" text-gray-800 h-auto w-full border  bg-gray-300 ">
            {options.map((option, i) => (
              <div
                key={i}
                className="hover:bg-gray-100 border-b h-auto py-2 px-8"
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
