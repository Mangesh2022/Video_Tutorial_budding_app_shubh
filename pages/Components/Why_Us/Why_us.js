import {getWhyUSData} from "../../../dummy-cleaning-site-data";
import Card from "../Card/card";
import WhyUsCard from "../WhyUsCard/whyus_card";
const WhyUS = () => {
  const whyUsData = getWhyUSData();

  return (
    <div className="container mx-auto mt-32 border bg-stone-100 py-24 ">
      <div className=" w-full px-24 ">
        <div className="uppercase text-center text-3xl font-semibold text-stone-700 ">
          Why Us
        </div>
        <div className="flex my-8 flex-wrap">
          {whyUsData.map((data) => (
            <WhyUsCard
              title={data.title}
              image={data.image}
              desc={data.description}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
