import Link from "next/link";
import Button from "../../Components/Button/index";

const Purchase_History = () => {
  return (
    <>
      <div className="w-full md:my-10 my-4 container mx-auto">
        <div className="flex md:flex-row mx-4 flex-col justify-center  items-center md:justify-between md:mr-10">
          <div className=" text-3xl  font-semibold w-full tracking-wide">
            Purchase History
          </div>
          <div className="flex flex-row  space-x-4  md:justify-end  justify-between my-4  align-middle items-center text-center ">
            <div className="flex bg-white px-4   border border-gray-400  rounded-md">
              <select
                id="Popularity"
                name="Popular list"
                form="popular"
                className="py-2 px-2   text-sm  bg-white  "
              >
                <option value="Networking">Sort by date</option>

                <option value="Networking">Today</option>
                <option value="default">Last week</option>
                <option value="Marketing">Last Month</option>
                <option value="Tools">Last Year</option>
              </select>
            </div>
            <div className="border flex  rounded-md  ">
              <div className="px-4 border-r py-1.5">img</div>
              <input type="search" className="   " />
            </div>
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row  mx-4 mb-10  py-4 border-b justify-between align-middle items-center">
          <div className="flex flex-col    justify-center align-middle items-center">
            <div className="lg:w-1/6">
              <div className="lg:h-32 w-96 lg:w-40 bg-gray-400 rounded-md flex justify-center text-center align-middle items-center m-4 ml-0">
                <img src="/images/Heroimg3.jpg" />
              </div>
            </div>
            <div className="">
              <div className="lg:text-xl text-lg mx-8  ">
                Data Analysis and Visualization Foundations Specialization
              </div>
              <div className=" text-sm lg:block hidden  text-gray-400 space-x-8 justify-between w-full">
                <div className="flex flex-col space-y-4 my-2">
                  <div className="font-semibold">Mas Fawaid</div>
                  <div className="flex">
                    <div className="mr-2">img</div>
                    <div>12 Module</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 my-2">
                  <div className="font-semibold">Data, Programming</div>
                  <div className="flex">
                    <div className="mr-2">img</div>
                    <div>50 min/session</div>
                  </div>
                </div>
              </div>
              <div className=" hidden md:block space-y-2 my-2">
                <div className="flex md:justify-between">
                  <div className=" text-right  flex  justify-center  items-end  align-bottom">
                    Payment:
                    <div className="font-semibold mx-2 text-gray-600">
                      Credit Card
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full md:w-auto ">
                    <div className="w-52 flex flex-col justify-center   lg:justify-end lg:items-end  lg:align-bottom space-y-1  lg:space-y-6 lg:text-left text-center   h-full">
                      <Button className="flex bg-cyan-700 justify-center text-white px-4 py-1">
                        <div className="mx-2">img</div>Invoice
                      </Button>
                      <div>
                        <div className="flex justify-center">
                          <div className="mx-2">Amount:</div>
                          <div className="flex">
                            <div>img</div>1200
                          </div>
                        </div>
                        <div className="flex lg:py-2 justify-center ">
                          <div className="mx-2">Date:</div>
                          <div>12 January 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  md:hidden space-y-2">
            <div className=" w-full text-right h-full hidden md:block flex justify-end  items-end  align-bottom">
              Payment:
              <div className="font-semibold mx-2  text-gray-600">
                Credit Card
              </div>
            </div>
            <div className="">
              <div className="md:w-52  flex flex-col justify-center   lg:justify-end lg:items-end  lg:align-bottom space-y-1  lg:space-y-6 lg:text-left text-center   h-full">
                <Button className="flex bg-cyan-700 justify-center text-white px-4 py-1">
                  <div className="mx-2">img</div>Invoice
                </Button>
                <div className="flex space-x-16 w-full">
                  <div className="flex justify-center">
                    <div className="mx-2">Amount:</div>
                    <div className="flex">
                      <div>img</div>1200
                    </div>
                  </div>
                  <div className="flex lg:py-2 justify-center ">
                    <div className="mx-2">Date:</div>
                    <div>12 January 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase_History;
