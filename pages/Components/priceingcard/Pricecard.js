import {getPricelist} from "../../../dummy-cleaning-site-data";

const PriceCard = (props) => {
  const priceList = getPricelist();

  if (props.id === "1" || props.id === "3") {
    return (
      <>
        <div className=" border  mx-auto  flex flex-col  ">
          <div className="bg-stone-200 justify-center  align-middle text-center  py-8 ">
            <div className="text-4xl  text-stone-700 font-semibold">
              {props.price}
            </div>
            <div className="uppercase text-xl   pt-2 text-slate-500 ">
              {props.title}
            </div>
          </div>
          <div className="bg-stone-100 ">
            <div className="text-slate-700 text-xl text-center flex justify-center px-10 pt-12">
              {props.desc}
            </div>
            <div className=" border border-stone-400 mx-14 my-4"></div>
            <div className="py-8 pl-4 font-extralight text-stone-500">
              <ul>
                {priceList.map((data) => (
                  <li className="pt-2">{data.description}</li>
                ))}
              </ul>
            </div>
            <div className="my-8  flex justify-center text-center  uppercase align-middle items-center">
              <div className=" border border-black px-8 py-2 text-sm   text-stone-700  shadow-xl">
                Select your plan
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="border mx-auto  flex flex-col  ">
          <div className="bg-stone-700 justify-center  align-middle text-center  py-8 ">
            <div className="text-4xl font-semibold  text-stone-200">
              {props.price}
            </div>
            <div className="uppercase text-xl   pt-2 text-stone-200 ">
              {props.title}
            </div>
          </div>
          <div className="bg-white ">
            <div className="text-stone-500 text-xl text-center flex justify-center px-10 pt-12">
              {props.desc}
            </div>
            <div className=" border border-stone-200 mx-14 my-4"></div>
            <div className="py-8 pl-4 text-stone-500">
              <ul>
                {priceList.map((data) => (
                  <li className="pt-2">{data.description}</li>
                ))}
              </ul>
            </div>
            <div className="my-8  flex justify-center text-center text-white uppercase align-middle items-center">
              <div className=" bg-stone-700 text-sm px-8 py-2  shadow-xl">
                Select your plan
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PriceCard;
