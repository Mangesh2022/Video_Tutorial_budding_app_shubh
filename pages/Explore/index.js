import Button from "../Components/Button/index";
import CoursesHOC from "../HOC/CoursesHOC/index";
import CourseCards from "../Sections/Course_card_section/Course_cards";
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

const Courses_For_Professional = () => {
  return (
    <>
      <div className="w-full my-10 container mx-auto">
        <div className="text-left flex flex-col justify-start md:mx-0 mx-10 ">
          <div className="flex text-3xl font-semibold tracking-wide">
            <div className="mr-2   text-cyan-700">Courses</div> for Professional
          </div>
          <div className="text-gray-500 ">
            The best online courses you'll find
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between md:mx-0 mx-10 my-14">
            <div className="text-gray-700 text-2xl font-semibold">Featured</div>
            <div>
              <Button
                type="primary"
                className="bg-cyan-600 text-white py-1 px-4"
              >
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
              Marketing
            </div>
            <div>
              <Button
                type="primary "
                className="bg-cyan-600 text-white py-1 px-4"
              >
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
              Data Analytics
            </div>
            <div>
              <Button
                type="primary"
                className="bg-cyan-600 text-white py-1 px-4"
              >
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
            <div className="text-gray-700 text-2xl font-semibold">Finance</div>
            <div>
              <Button
                type="primary"
                className="bg-cyan-600 text-white py-1 px-4"
              >
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
      </div>
    </>
  );
};
export default Courses_For_Professional;
