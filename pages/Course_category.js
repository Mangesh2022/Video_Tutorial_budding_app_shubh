import Button from "./Components/Button";
import CoursesHOC from "./HOC/CoursesHOC";

const Courses_Category = () => {
  return (
    <>
      <div className="w-full my-20 container mx-auto">
        <div className="flex flex-row justify-between mr-10">
          <div className="text-left flex flex-col justify-start ">
            <div className="flex text-3xl font-semibold tracking-wide">
              <div className="mr-2   text-cyan-700">Finance</div> Courses
            </div>
            <div className="text-gray-500 ">142 Results </div>
          </div>
          <div className="flex flex-row justify-center align-middle items-center text-center ">
            <div className="mr-8 flex flex-row rounded-md border border-gray-400">
              <div className="py-2 px-3 w-full h-full">
                <img src="images/list.svg" alt="" />
              </div>
              <div className="bg-cyan-500 py-2 px-3 w-full h-8">
                <img src="images/filter.svg" alt="" />
              </div>
            </div>
            <div className="flex bg-white w-48  border border-gray-400  rounded-md">
              <select
                id="Popularity"
                name="Popular list"
                form="popular"
                className="py-2 px-4   text-sm  bg-white  "
              >
                <option value="default">Sort by Popularity</option>
                <option value="Marketing">Marketing</option>
                <option value="Tools">Tools</option>
                <option value="Networking">Networking</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div>
            <CoursesHOC Cardno="8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses_Category;
