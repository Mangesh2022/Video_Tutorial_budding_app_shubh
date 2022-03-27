import CourseCards from "../../../Sections/Course_card_section/Course_cards";
import Link from "next/link";
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
    id: "c2",
    title: "Enterpreneurship: Innovative Business",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c3",
    title: "Foundations of Marketing Analytics Specialization",
    author: "Sebo Studio",
    subject: "Finance management",
    module: "12",
    session: "50",
    Course_Cover_source: "/images/Heroimg3.jpg",
    isFeatured: false,
  },
  {
    id: "c4",
    title: "Data Analysis and Foundation Speciliazation",
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

const Courses_Category = () => {
  return (
    <>
      <div className="w-full md:my-20 my-4 container mx-auto">
        <div className="flex md:flex-row flex-col justify-center mx-8 items-center md:justify-between md:mr-10">
          <div className="md:text-left text-center flex flex-col justify-start ">
            <div className="flex text-3xl  font-semibold tracking-wide">
              <div className="mr-2   text-cyan-700">Finance</div> Courses
            </div>
            <div className="text-gray-500 ">142 Results </div>
          </div>
          <div className="flex flex-row  md:justify-end  justify-between my-4 w-full align-middle items-center text-center ">
            <div className="md:mr-8 flex flex-row rounded-md border border-gray-400">
              <Link href={"/"}>
                <div className="py-2 px-3 w-full h-full cursor-pointer">
                  <img src="/images/list.svg" alt="" />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="bg-cyan-500 py-2 px-3 w-full h-8 cursor-pointer">
                  <img src="/images/filter.svg" alt="" />
                </div>
              </Link>
            </div>
            <div className="flex bg-white w-48  border border-gray-400  rounded-sm">
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
        <div className="w-auto">
          <div className="flex justify-center align-middle text-center items-center  mx-auto my-10 flex-wrap flex-row">
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
    </>
  );
};

export default Courses_Category;
