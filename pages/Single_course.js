import Button from "./Components/Button/index";
import Dropdown from "./HOC/Dropdown";
import CourseCards from "./Sections/Course_card_section/Course_cards";
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

const Single_course = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-gray-500 text-sm">
          My courses Foundations of Degital Marketing
        </div>
        <div className="w-full my-14 flex flex-row  justify-between text-left">
          <div className=" w-2/3  mr-14   flex flex-col justify-start text-left   ">
            <div className=" h-96 w-full rounded-t-2xl flex text-2xl justify-center align-middle text-center items-center border-2 ">
              video player
            </div>
            <div className="text-gray-900 mt-10 text-3xl">
              {Course_Data[2].title}
            </div>
            <div className="flex flex-row my-2 text-gray-500">
              <div className="mr-14">{Course_Data[2].author}</div>
              <div className="mr-14">{Course_Data[2].subject}</div>
              <div className="mr-14 text-green-500">+Follow Mentor</div>
            </div>
          </div>

          <div className="w-1/3 mb-28  ">
            <div className="w-full border flex flex-col justify-start text-left px-8 py-8 rounded-2xl h-96">
              <div className="text-gray-700 text-xl font-semibold">
                {Course_Data[2].title}
              </div>
              <div className="my-2 text-gray-500 tracking-wider">
                {Course_Data[2].subject}{" "}
              </div>
              <div className="flex flex-row justify-between ">
                <div className="w-2/3 flex flex-col my-8">
                  <div className="my-2">Duration: </div>
                  <div className="my-2">Lecture :</div>
                  <div>Instructor: </div>
                </div>
                <div className=" w-1/3 text-gray-500 flex flex-col my-8">
                  <div className="my-2">
                    <img />5 weeks{" "}
                  </div>
                  <div className="my-2">
                    <img />
                    12 Module{" "}
                  </div>
                  <div>
                    <img />
                    {Course_Data[2].author}{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-center align-middle text-center items-center">
                <Button type="primery">Enrolled</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex  flex-row h-auto justify-between  text-left">
          <div className="w-2/3  mr-14 flex  mb-14  h-auto mx-auto rounded-t-xl  py-14 justify-start items-start align-top ">
            <div className="w-full container h-auto mx-auto">
              <div className="ml-14 my-14">tabs </div>
              <div className="w-full h-auto ">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
              </div>
            </div>
          </div>
          <div className="w-1/3 mt-32  flex flex-col justify-center rounded-xl   items-center mx-auto ">
            <div className="text-2xl text-gray-700 font-semibold mb-8 tracking-wide">
              Related courses
            </div>
            <div className="h-auto mx-auto">
              <div className="w-full">
                {Course_Data.map(
                  (data, index) =>
                    index < 1 && (
                      <div>
                        {data.id === "c1" ? (
                          <CourseCards
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
    </>
  );
};

export default Single_course;
