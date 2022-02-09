const WhyUsCard = (props) => {
  if (
    props.id === "1" ||
    props.id === "3" ||
    props.id === "5" ||
    props.id === "7" ||
    props.id === "2" ||
    props.id === "4" ||
    props.id === "6" ||
    props.id === ""
  ) {
    return (
      <>
        <div className="py-8 w-1/3 px-8 ">
          <div className="flex   flex-col justify-start align-top  items-start  text-left ">
            <div className=" ">
              <img src={props.image} className="w-12 h-12" />
            </div>
            <div className="flex flex-col justify-start align-middle py-4 items-start text-left ">
              <div className="text-stone-700 uppercase tracking-widest text-base font-semibold   ">
                {props.title}
              </div>
              <div className="text-stone-500 text-sm py-4 leading-7 text-justify font-extralight  ">
                {props.desc}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>no item</div>;
  }
};

export default WhyUsCard;
