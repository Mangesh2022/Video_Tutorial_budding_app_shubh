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

const Profile = () => {
  return (
    <>
      <div className="container mx-auto   ">
        <div className=" w-full flex-row  ">
          <div className=" flex text-gray-500 flex-row mx-4 lg:mx-8 justify-left space-y-4 md:space-y-0   flex-wrap md:flex-nowrap  align-middle items-center text-center ">
            <div className="flex flex-row mt-4  md:mt-0  justify-between  mr-8">
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
            <div className="flex flex-row mr-8 bg-cyan-700 rounded-sm text-white py-2 px-6 justify-between">
              <div className="">img</div>
              <div className="ml-2">Profile</div>
            </div>
          </div>
        </div>
        <div className="flex  lg:flex-row  flex-col lg::w-full justify-between mx-8 my-24">
          <div className="lg:w-2/12 ">
            <div className="md:w-full justify-center items-center flex ">
              <img src="/images/Heroimg.jpg" className="h-52 lg:w-full" />
            </div>
            <div className="flex md:space-x-4  mx-20 md:mx-8 my-8 justify-between">
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <div className="lg:w-6/12 mt-8 md:mt-0 space-y-8">
            <div>
              <div className="text-3xl font-semibold">Rohan singh</div>
              <div className="text-cyan-700 text-xl font-semibold mt-1.5">
                Marketing Head
              </div>
            </div>
            <div className="text-gray-800">
              <div className="text-gray-400 font-semibold my-1">About me</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </div>
            </div>
            <div className="text-gray-800">
              <div className="text-gray-400 font-semibold my-1">
                Basic Information
              </div>
              <div className="flex space-x-24">
                <div className="flex flex-col text-gray-700 space-y-1.5">
                  <div>Email:</div>
                  <div>Phone:</div>
                  <div>Institute:</div>
                  <div>Interest:</div>
                  <div>Address:</div>
                  <div>Birthday:</div>
                  <div>Gender:</div>
                  <div>Heighest Degree:</div>
                  <div>Website :</div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <div>Rohansingh@gmail.com</div>
                  <div>+91 9999999999</div>
                  <div>Tata Consultancy</div>
                  <div>Technology</div>
                  <div>Lorem Ipsum, Delhi</div>
                  <div>9 July 1995</div>
                  <div>Male</div>
                  <div>Under Graduate</div>
                  <div>WWW.singh.com </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/12 mt-8 lg:mt-0 items-start flex justify-start text-left align-top ">
            <div>
              <Button className="bg-cyan-700 py-1 px-4 text-white">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
