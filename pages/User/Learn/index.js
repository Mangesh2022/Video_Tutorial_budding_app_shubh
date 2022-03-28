import Button from "../../Components/Button/index";
import CourseCards from "../../Sections/Course_card_section/Course_cards";
export const Course_Data = [
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
];

const Live_Project = () => {
  return (
    <>
      <div className="w-full mt-4    container mx-auto">
        <div className="w-1/2 mt-8 mb-14 flex flex-row ">
          <div className=" flex text-gray-500 flex-row justify-center align-middle items-center text-center ">
            <div className="flex flex-row  rounded-sm justify-between mr-8">
              <div>img</div>
              <div className="ml-2">Dashboard</div>
            </div>
            <div className="flex bg-cyan-600 py-2 px-6 text-white flex-row  justify-between mr-8">
              <div>img</div>
              <div className="ml-2">Learn</div>
            </div>
            <div className="flex flex-row justify-between mr-8">
              <div>img</div>
              <div className="ml-2">My Courses</div>
            </div>
            <div className="flex flex-row mr-8">
              <div>img</div>
              <div className="ml-2">Shedule</div>
            </div>
            <div className="flex flex-row mr-8 justify-between">
              <div className="">img</div>
              <div className="ml-2">Profile</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between align-middle  md:mx-0 mx-10 ">
          <div className="text-left flex flex-col  justify-start">
            <div className="flex text-3xl font-semibold tracking-wide">
              <div className="mr-2   text-cyan-700">Live</div> Project
            </div>
            <div className="text-gray-500 ">
              Track Your progress, Download Certificates and More{" "}
            </div>
          </div>
          <div className="flex bg-white w-48 my-6 md:my-2 border border-gray-400  rounded-sm">
            <select
              id="Popularity"
              name="Popular list"
              form="popular"
              className=" w-full px-4 mr-4  text-sm  bg-white  "
            >
              <option value="default">Live Projects</option>
              <option value="Marketing">Expired</option>
              <option value="Tools">Completed</option>
              <option value="Networking">In progress</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-200 my-8 h-0.5 w-full"></div>
        <div>
          <div className="flex flex-row justify-between md:mx-0 mx-10 my-14">
            <div className="text-gray-700 text-2xl font-semibold">
              In-Progress
            </div>
            <div>
              <Button type="" className="bg-cyan-600 text-white py-1 px-4">
                View all
              </Button>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex justify-center align-middle text-center items-center  mx-auto  flex-wrap flex-row">
              {Course_Data &&
                Course_Data.map((data) => (
                  <CourseCards
                    id={data.id}
                    title={data.title}
                    author={data.author}
                    subject={data.subject}
                    module={data.module}
                    session={data.session}
                    Course_Cover_source={data.Course_Cover_source}
                  />
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between md:mx-0 mx-10 my-14">
            <div className="text-gray-700 text-2xl font-semibold">
              Completed
            </div>
            <div>
              <Button type=" " className="bg-cyan-600 text-white py-1 px-4">
                View all
              </Button>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex justify-center align-middle text-center items-center  mx-auto  flex-wrap flex-row">
              {Course_Data &&
                Course_Data.map((data) => (
                  <CourseCards
                    id={data.id}
                    title={data.title}
                    author={data.author}
                    subject={data.subject}
                    module={data.module}
                    session={data.session}
                    Course_Cover_source={data.Course_Cover_source}
                    download_certificate="on"
                  />
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between md:mx-0 mx-10 my-14">
            <div className="text-gray-700 text-2xl font-semibold">Expired </div>
            <div>
              <Button type="" className="bg-cyan-600 text-white py-1 px-4">
                View all
              </Button>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex justify-center align-middle text-center items-center  mx-auto  flex-wrap flex-row">
              {Course_Data &&
                Course_Data.map((data) => (
                  <CourseCards
                    id={data.id}
                    title={data.title}
                    author={data.author}
                    subject={data.subject}
                    module={data.module}
                    session={data.session}
                    Course_Cover_source={data.Course_Cover_source}
                    dropoff="on"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Live_Project;
