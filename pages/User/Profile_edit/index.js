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

const EditProfile = () => {
  return (
    <>
      <div className="container mx-auto   ">
        <div className="text-5xl my-8 mx-8 flex font-semibold">
          <div className="text-cyan-700 mr-2">Edit </div>my profile
        </div>
        <div className="flex  lg:flex-row  flex-col lg:w-full  px-8 my-24">
          <div className="xl:w-2/12 ">
            <div className="md:w-full justify-center items-center flex ">
              <div className="h-52 w-full bg-gray-200 lg:w-full text-center text-6xl text-gray-400 items-center align-middle flex justify-center">
                +
              </div>
            </div>
            <div className="flex md:space-x-4  mx-20 md:mx-8 my-8 justify-between">
              <Button className="bg-cyan-700 text-white py-1 px-4 rounded-sm">
                Upload Photo
              </Button>
            </div>
            <div className="my-24 space-y-4">
              <div className="flex  justify-center align-middle items-center text-center">
                <div className="flex justify-center items-center align-middle   text-center">
                  img
                </div>
                <div>
                  <input type="text" className="border  align-middle ml-2" />
                </div>
              </div>
              <div className="flex justify-center align-middle items-center text-center">
                <div
                  cla
                  className="flex justify-center items-center align-middle   text-center"
                  ssName="h-24  bg-red-700"
                >
                  img
                </div>
                <div>
                  <input type="text" className="border  align-middle ml-2" />
                </div>
              </div>
              <div className="flex justify-center align-middle items-center text-center">
                <div className="flex justify-center items-center align-middle   text-center">
                  img
                </div>
                <div>
                  <input type="text" className="border  align-middle ml-2" />
                </div>
              </div>
              <div className="flex justify-center align-middle items-center text-center">
                <div className="flex justify-center items-center align-middle   text-center">
                  img
                </div>
                <div>
                  <input type="text" className="border  align-middle ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 md:mx-20 mt-8 md:mt-0 flex flex-col space-y-4">
            <input className="border px-4" placeholder="Full Name" />
            <input className="border px-4" placeholder="Occupation" />
            <div className="text-gray-800">
              <div className="text-gray-400 font-semibold my-1">About me</div>
              <input
                className="border w-full h-24"
                placeholder="Tell us yourself"
                type="text"
              />
            </div>
            <div className="text-gray-800">
              <div className="text-gray-400 font-semibold my-1">
                Basic Information
              </div>
              <div className=" w-full flex flex-col space-y-4">
                <input className="border px-4" placeholder="Your Email ID" />
                <input className="border px-4" placeholder="Phone" />
                <input className="border px-4" placeholder="Institute" />
                <input className="border px-4" placeholder="Interest" />
                <input className="border px-4" placeholder="Address" />
                <input className="border px-4" placeholder="Birthday" />
                <input className="border px-4" placeholder="Heighest Degree" />
                <input className="border px-4" placeholder="Your website" />
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 mt-8  lg:mt-0 items-start flex xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8 align-middle xl:justify-start xl:text-left xl:align-top ">
            <Button className="bg-gray-300 py-1 px-4 text-gray-600">
              Cancle
            </Button>
            <Button className="bg-cyan-700 w-full py-1 px-4 text-white">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
