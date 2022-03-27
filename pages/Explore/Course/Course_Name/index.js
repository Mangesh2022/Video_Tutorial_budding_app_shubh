import Button from "../../../Components/Button/index";
import Dropdown from "../../../HOC/Dropdown/index";
import CourseCards from "../../../Sections/Course_card_section/Course_cards";
import {useState} from "react";
const Course_Data = [
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

const Single_course = () => {
  //   const [toggleState, setToggleState] = useState(1);
  //   const toggleTab = (index) => {
  //     setToggleState(index);
  //   };

  return (
    <>
      <div className="lg:container my-4 md:mx-auto  px-4 ">
        <div className="text-gray-500 text-sm ">
          My courses Foundations of Degital Marketing
        </div>
        <div className="w-full lg:my-14 my-8 flex lg:flex-row flex-col  justify-between text-left">
          <div className=" lg:w-2/3 w-auto  lg:mr-14   flex flex-col justify-start text-left   ">
            <div className=" h-96 w-full rounded-t-2xl flex text-2xl justify-center align-middle text-center items-center border-2 ">
              video player
            </div>
            <div className="text-gray-900 md:mt-10 mt-6 text-2xl md:text-3xl">
              {Course_Data[2].title}
            </div>
            <div className="flex flex-row my-2 justify-between md:justify-start text-sm md:text-base text-gray-500 ">
              <div className="md:mr-14  font-semibold">
                {Course_Data[2].author}
              </div>
              <div className="md:mr-14 text-gray-400 font-semibold">
                {Course_Data[2].subject}
              </div>
              <div className="mr-14 text-green-600 tracking-wider font-semibold">
                +Follow Mentor
              </div>
            </div>
          </div>

          <div className="lg:w-1/3  lg::mb-28 my-10 lg:my-0  ">
            <div className="w-full border flex flex-col justify-start text-left px-8 md:py-8 pb-8 rounded-2xl md:h-96">
              <div className="text-gray-700 md:block hidden text-xl font-semibold">
                {Course_Data[2].title}
              </div>
              <div className="my-2 text-gray-500 md:block hidden tracking-wider">
                {Course_Data[2].subject}{" "}
              </div>
              <div className="flex flex-row  justify-between ">
                <div className="w-full flex flex-col my-8">
                  <div className="my-2">Duration: </div>
                  <div className="my-2">Lecture :</div>
                  <div>Instructor: </div>
                </div>
                <div className=" w-full text-gray-500  flex flex-col my-8">
                  <div className="my-2 flex  ">
                    <img src="/images/session.svg" alt="img" className="mr-2" />
                    5 weeks{" "}
                  </div>
                  <div className="my-2 flex">
                    <img src="/images/session.svg" alt="img" className="mr-2" />
                    12 Module{" "}
                  </div>
                  <div className="flex">
                    <img src="/images/session.svg" alt="img" className="mr-2" />
                    {Course_Data[2].author}{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-center align-middle text-center items-center">
                <Button
                  type="primary"
                  className="bg-green-600 text-white py-2 px-6"
                >
                  Enrolled
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col  md:flex-row h-auto justify-between  text-left">
          <div className="lg:w-2/3 w-full   lg::mr-14 flex  md:mb-14  h-auto mx-auto rounded-t-xl  lg:py-14 justify-start items-start align-top ">
            {/* <div className="block-tabs justify-between w-full border">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Feature
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                On Sale
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Top Rated
              </button>
            </div> */}

            {/* <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="flex w-full justify-items-center justify-center h-full  ">
                  tab1 content
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="flex w-full justify-items-center justify-center h-full  ">
                  Tab 2 content
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div className="flex w-full justify-items-center justify-center h-full  ">
                  Tab 3 content
                </div>
              </div>
            </div> */}

            <div className=" md:container w-full  h-auto md:mx-auto">
              <div className="  p-4 md:my-14">Tab 1|Tab 2| </div>
              <div className=" h-auto ">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
              </div>
            </div>
          </div>
          <div className=" mt-32  flex flex-col justify-center rounded-xl   items-center  ">
            <div className="text-2xl text-gray-700 font-semibold mb-8 tracking-wide">
              Related courses
            </div>
            <div className="h-auto  mx-auto">
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
