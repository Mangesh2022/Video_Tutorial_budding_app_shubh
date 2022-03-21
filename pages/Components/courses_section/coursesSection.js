import Button from "../Button/index";
import CoursesHOC from "../../HOC/CoursesHOC/index";
import CourseCards from "../../Sections/Course_card_section/Course_cards";

export const Course_Data = [
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

const CoursesSection = () => {
  return (
    <div className="w-full md:mx-auto  md:justify-center ">
      <div className=" my-24 mb-10 mx-4  flex flex-col justify-between  ">
        <div className="flex justify-center text-gray-700 text-3xl font-semibold tracking-wide w-full">
          Courses & Live Projects
        </div>
        <div className="flex flex-col md:flex-row my-4 md:my-14 md:w-full md:flex md:mx-auto md:container md:justify-between ">
          <div className="block md:hidden my-8 w-full ">
            <div className=" flex  border w-full rounded-md border-gray-300 flex-row  text-center  align-middle items-center">
              <img
                src="images/Search.svg"
                className="bg-gray-200 h-10 py-2 pl-2 px-2 w-1/6 "
              />
              <input
                type="text"
                placeholder="Find Course"
                className="bg-gray-200 text-gray-500 flex w-5/6  justify-center py-2   mx-auto  text-left md:w-28"
              />
            </div>
          </div>
          <div className="flex text-gray-500 ">
            <div className="mr-8 text-blue-900 font-semibold ">Courses</div>
            <div>Live Courses</div>
          </div>
          <div className="hidden md:block ">
            <div className=" flex border md:w-auto rounded-md border-gray-300  flex-row justify-center text-center  align-middle items-center">
              <img
                src="images/Search.svg"
                className="bg-gray-200 h-10 py-2 pl-2  mx-auto"
              />
              <input
                type="text"
                placeholder="Find Course"
                className="bg-gray-200 text-gray-500 flex  justify-center py-2  mx-auto text-center w-28 md:w-full"
              />
            </div>
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

        {/* <div className="mx-24 my-44">
          <CourseCards />
        </div> */}
        <div className="flex justify-center">
          <Button type="primery">Explore Courses</Button>
        </div>
        <div className="h-1 my-14 flex justify-center bg-gray-300 opacity-50 mx-96"></div>
      </div>
    </div>
  );
};

export default CoursesSection;
