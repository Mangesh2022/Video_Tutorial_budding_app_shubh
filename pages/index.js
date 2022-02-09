import Booking_Steps from "../pages/Components/Booking_steps _section/Booking";
import Hero_Area from "../pages/Components/hero-area/hero-area-section";
import Services_section from "../pages/Components/Services_section/Services_section";
import WhyUS from "../pages/Components/Why_Us/Why_us";
import FullBanner from "../pages/Components/Full_Banner/Full_Banner";
import CarCleaning from "../pages/Components/Car_Cleaning/Car_Cleaning";
import Banner from "../pages/Components/Banner/Banner";
import Pricing from "../pages/Components/Pricing/Pricing";
import Blogs from "../pages/Components/Blogs_section/Blog_list";
import Hero_Area1 from "../pages/Components/hero-area1/hero-area-section1";
import Image from "next/dist/client/image";

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
      <Blogs />
    </>
  );
};

export default Home;
