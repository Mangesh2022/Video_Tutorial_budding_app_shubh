import {getPriceData} from "../../../dummy-cleaning-site-data";
import PriceCard from "../priceingcard/Pricecard";

const Pricing = () => {
  const pricingData = getPriceData();
  return (
    <div className="my-24 container mx-auto ">
      <div className="text-center">
        <div className="text-3xl  font-semibold uppercase text-stone-700">
          Services Plan
        </div>
        <div className="text-stone-400 text-xl my-4 pb-20">
          Customization Packages
        </div>
      </div>
      <div className=" px-24 flex">
        {pricingData.map((data) => (
          <div className=" mx-4">
            <PriceCard
              price={data.price}
              title={data.title}
              desc={data.description}
              id={data.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
