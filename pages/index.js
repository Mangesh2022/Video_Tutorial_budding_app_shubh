import CoursesSection from "./Components/courses_section/coursesSection.js";
import Hero_Area from "./HOC/heroArea/index.js";
import Instructor from "./Sections/instractor_section/index";
import Collaboration from "./Sections/Collaboration_section/index";
import FeedbackSection from "./Sections/feedback_section/index";
import Achievement from "./Sections/Achievement/index";
import Subscribe_banner from "./Sections/Subscribe_banner/index.js";

const Home = () => {
  return (
    <>
      <Hero_Area />
      <CoursesSection />
      <Instructor />
      <Collaboration />
      <FeedbackSection />
      <Achievement />
      <Subscribe_banner />
    </>
  );
};

export default Home;
