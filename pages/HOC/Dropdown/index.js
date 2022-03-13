import {useState} from "react";

const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["sample 1", "sample 2", "sample 3"];
  return (
    <>
      <div className="relative z-20 mx-14 h-auto   ">
        <div
          className=" border  flex flex-row justify-between px-8 py-4 mt-4"
          onClick={(e) => setIsActive(!isActive)}
        >
          <div className="w-1/2">Chapter 1</div>
          <div className="flex w-1/2  justify-end text-right align-middle items-center flex-row">
            <div className=" ">Estimated Time: 12 hr</div>
            <div className="ml-8  border">V</div>
          </div>
        </div>
        {isActive && (
          <div className="absolute text-gray-800 h-auto w-full border  bg-gray-50 ">
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
