import {useState, useEffect} from "react";
import {getCardData} from "../../../dummy-cleaning-site-data.js";
import Card from "../Card/card.js";

const Services_section = () => {
  // const ServiceCard = getCardData();

  const [ServiceCard, setServiceCard] = useState(undefined);

  useEffect(async () => {
    if (!ServiceCard) {
      let services = await getCardData();
      // let services = await fetch(`/api/services`);
      // let data = await services.json();
      setServiceCard(services.data);
    } else {
      console.log({ServiceCard});
    }
  });

  return (
    <div className="py-24 container mx-auto  mt-24  ">
      <div className="uppercase text-center  text-3xl font-semibold text-stone-7  00">
        services we provide
      </div>
      <div className="text-stone-400 text-xl font-semibold text-center pt-4 normal-case">
        Give Your Home or Office Deep Clean
      </div>
      <div className="flex justify-items-center mt-20 mx-36  flex-wrap flex-row">
        {ServiceCard &&
          ServiceCard.map((data) => (
            <Card
              title={data.title}
              cardimg={data.image}
              desc={data.description}
              id={data.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Services_section;
