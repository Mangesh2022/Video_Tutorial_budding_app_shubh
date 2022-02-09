import Booking_Steps from "../Booking_steps _section/Booking";
import Hero_Area from "../hero-area/hero-area-section";
import Services_section from "../Services_section/Services_section";
import WhyUS from "../Why_Us/Why_us";
import FullBanner from "../Full_Banner/Full_Banner";
import CarCleaning from "../Car_Cleaning/Car_Cleaning";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import HomePageBlogSec from "../Blogs_section/Blog_list";

const Home = () => {
  return (
    <>
      <Hero_Area />
      <Services_section />
      <Booking_Steps />
      <WhyUS />
      <FullBanner />
      <CarCleaning />
      <Banner />
      <Pricing />
      <Banner />
      <HomePageBlogSec />
    </>
  );
};

export default Home;
