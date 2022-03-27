import Button from "../../../../../Components/Button/index";
const LessionVideo = () => {
  return (
    <>
      <div className=" container mx-auto my-8 ">
        <div className=" flex flex-wrap inline mx-8 my-8">
          <div className=" text-gray-500 ">
            Foundations of Marketing Analytics Specialization/
          </div>
          <div className="text-cyan-700"> Chapter 2</div>
        </div>
        <div className="w-full flex flex-row">
          <div className="lg:w-1/3  lg:block hidden  py-4 tracking-wider px-4">
            <div className="border-r  border-gray-400 pr-8 space-y-4  ">
              <div className="flex  justify-between px-8 py-4 border border-gray-300 rounded-md">
                <div>Chapter 1</div>
                <div>img</div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between border border-gray-300 rounded-t-md px-8 py-4 w-full">
                  <div>Chapter 2</div>
                  <div>img</div>
                </div>
                <div className="flex text-green-600 inline justify-left align-middle border border-t-0 border-gray-300 px-8 py-4 w-full">
                  <div className="mr-4">img</div>
                  <div className="font-semibold mr-2">Reading:</div>
                  <div>Introductin to Marketing</div>
                </div>
                <div className="flex text-gray-500 inline justify-left align-middle border border-t-0 border-gray-300 px-8 py-4 w-full">
                  <div className="mr-4">img</div>
                  <div className="font-semibold mr-2">Video:</div>
                  <div>Introductin to Marketing</div>
                </div>
                <div className="flex text-gray-500 justify-left align-middle border border-t-0 border-gray-300 pl-8 py-4 w-full">
                  <div className="mr-4">img</div>
                  <div className="font-semibold mr-2 flex- flex-col ">
                    <div className="mb-4">Test</div>
                    <div className="flex xl:flex-row flex-col md:space-y-2 xl:space-y-0  xl:space-x-2 ">
                      <div className="border border-gray-300 rounded-sm flex justify-center py-1 xl:px-4 px-2   text-center align-middle items-center">
                        MCQ
                      </div>
                      <div className="border border-gray-300 rounded-sm flex justify-center py-1 xl:px-4 px-2 text-center align-middle items-center">
                        File Upload Test
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  justify-between px-8 py-4 border border-gray-300 rounded-md">
                <div>Chapter 3</div>
                <div>img</div>
              </div>
              <div className="flex  justify-between px-8 py-4 border border-gray-300 rounded-md">
                <div>Chapter 4</div>
                <div>img</div>
              </div>
              <div className="flex  justify-between px-8 py-4 border border-gray-300 rounded-md">
                <div>Chapter 5</div>
                <div>img</div>
              </div>
              <div className="bg-stone-400 text-white rounded-md flex justify-start py-4 px-8 xl:text-xl  text-left align-middle items-start">
                Download Certificates
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 text-justify  px-8 py-4">
            <div className="h-96 border mb-8 rounded-t-md p-8">video</div>
            <div className="text-gray-600 text-2xl font-semibold">
              Marketing Foundamentals: Who is your customer?
            </div>
            <div className="flex text-gray-500">
              <div className="mr-8">Geo Vanni</div>
              <div className="mx-8">Marketing Research</div>
            </div>

            <div className="border my-8 border-gray-300 rounded-md p-8 h-40 w-full">
              Write a comment
            </div>
            <div className="w-full flex justify-end items-end align-middle text-right">
              <Button className="bg-cyan-700 text-white w-40  py-1 px-6">
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LessionVideo;
