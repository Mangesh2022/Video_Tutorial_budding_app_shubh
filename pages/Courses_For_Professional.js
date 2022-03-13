import Button from "./Components/Button";
import CoursesHOC from "./HOC/CoursesHOC";
import CourseCards from "./Sections/Course_card_section/Course_cards";

const Courses_For_Professional = () => {
  return (
    <>
      <div className="w-full my-20 container mx-auto">
        <div className="text-left flex flex-col justify-start ">
          <div className="flex text-3xl font-semibold tracking-wide">
            <div className="mr-2   text-cyan-700">Courses</div> for Professional
          </div>
          <div className="text-gray-500 ">
            The best online courses you'll find
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between my-14">
            <div className="text-gray-700 text-2xl font-semibold">Featured</div>
            <div>
              <Button type="primery">View all</Button>
            </div>
          </div>
          <div>
            <CoursesHOC Cardno="4" />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between my-14">
            <div className="text-gray-700 text-2xl font-semibold">
              Marketing
            </div>
            <div>
              <Button type="primery">View all</Button>
            </div>
          </div>
          <div>
            <CoursesHOC Cardno="4" />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between my-14">
            <div className="text-gray-700 text-2xl font-semibold">
              Data Analytics
            </div>
            <div>
              <Button type="primery">View all</Button>
            </div>
          </div>
          <div>
            <CoursesHOC Cardno="4" />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between my-14">
            <div className="text-gray-700 text-2xl font-semibold">Finance</div>
            <div>
              <Button type="primery">View all</Button>
            </div>
          </div>
          <div>
            <CoursesHOC Cardno="4" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses_For_Professional;
