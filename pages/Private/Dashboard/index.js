import Button from "../../Components/Button/index";
import CourseCards from "../../Sections/Course_card_section/Course_cards";
const Course_Data = [
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c2",
    title: "Enterpreneurship: Innovative Business",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c3",
    title: "Foundations of Marketing Analytics Specialization",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c4",
    title: "Data Analysis and Foundation Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c1",
    title: "Introducton to finance and Accounting Speciliazation",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "images/Heroimg3.jpg",
    isFeatured: false,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="w-1/2 flex flex-row ">
          <div className=" flex text-gray-500 flex-row justify-center align-middle items-center text-center ">
            <div className="flex flex-row bg-green-600 rounded-sm text-white py-2 px-6 justify-between mr-8">
              <div>img</div>
              <div className="ml-2">Dashboard</div>
            </div>
            <div className="flex flex-row  justify-between mr-8">
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
        <div className="flex flex-row my-24">
          <div className="w-3/5  mr-14">
            <div className="text-gray-800 text-4xl font-semibold flex">
              Welcome Back, <div className="text-green-600 ml-2">Rohan</div>
            </div>
            <div className="text-gray-800 my-8 font-semibold text-xl tracking-wider">
              Last Watched
            </div>
            <div className="h-96 bg-slate-300  rounded-t-lg">
              <div className=" bg-slate-300">video</div>
            </div>
            <div className="flex w-full flex-col ">
              <div className="text-gray-800  text-2xl font-semibold flex mt-6 mb-4">
                {Course_Data[4].title}
              </div>
              <div className="flex flex-row w-2/3 tracking-wider justify-between">
                <div className="text-gray-500 text-sm">
                  {Course_Data[4].author}
                </div>
                <div className="text-gray-500 text-sm">
                  {Course_Data[4].subject}
                </div>
                <div className="text-green-600 text-sm">+Follow Mentor</div>
              </div>
            </div>
          </div>
          <div className="w-2/5 mx-14 border  rounded-xl">
            <div className="flex flex-row justify-between mx-8 mt-8">
              <div className="text-gray-700 text-lg font-semibold">
                My courses
              </div>
              <div>
                <Button type="primery">View All</Button>
              </div>
            </div>
            <div className="w-ful justify-between  mt-4">
              <div className="flex flex-row mx-2 my-2">
                <div className="w-full">
                  {Course_Data.map(
                    (data, index) =>
                      index < 1 && (
                        <div>
                          {data.id === "c1" ? (
                            <CourseCards
                              sizesmall="small"
                              id={data.id}
                              title={data.title}
                              author={data.author}
                              subject={data.subject}
                              module={data.module}
                              session={data.session}
                              Course_Cover_source={data.Course_Cover_source}
                            />
                          ) : (
                            "not found"
                          )}
                        </div>
                      )
                  )}
                </div>

                <div className="w-full">
                  {Course_Data.map(
                    (data, index) =>
                      index < 1 && (
                        <div>
                          {data.id === "c1" ? (
                            <CourseCards
                              sizesmall="small"
                              id={data.id}
                              title={data.title}
                              author={data.author}
                              subject={data.subject}
                              module={data.module}
                              session={data.session}
                              Course_Cover_source={data.Course_Cover_source}
                            />
                          ) : (
                            "not found"
                          )}
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-8 mt-8">
              <div className="text-gray-700 text-lg font-semibold">
                Popular courses
              </div>
              <div>
                <Button type="primery">View All</Button>
              </div>
            </div>
            <div className="w-ful justify-between  ">
              <div className="flex flex-row mx-2 my-2">
                <div className="w-full">
                  {Course_Data.map(
                    (data, index) =>
                      index < 1 && (
                        <div>
                          {data.id === "c1" ? (
                            <CourseCards
                              sizesmall="small"
                              id={data.id}
                              title={data.title}
                              author={data.author}
                              subject={data.subject}
                              module={data.module}
                              session={data.session}
                              Course_Cover_source={data.Course_Cover_source}
                            />
                          ) : (
                            "not found"
                          )}
                        </div>
                      )
                  )}
                </div>

                <div className="w-full">
                  {Course_Data.map(
                    (data, index) =>
                      index < 1 && (
                        <div>
                          {data.id === "c1" ? (
                            <CourseCards
                              sizesmall="small"
                              id={data.id}
                              title={data.title}
                              author={data.author}
                              subject={data.subject}
                              module={data.module}
                              session={data.session}
                              Course_Cover_source={data.Course_Cover_source}
                            />
                          ) : (
                            "not found"
                          )}
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
