const StepCard = (props) => {
  return (
    <>
      <div className=" mx-auto my-8 flex flex-col justify-center text-center ">
        <div className="items-center align-middle text-center flex justify-center">
          <img
            src={props.image}
            className="w-auto h-auto m-2 items-center justify-center text-center align-middle "
          />
        </div>
        <div className="items-center align-middle text-center flex justify-center">
          <img
            src={props.stepimg}
            className="w-7/12 h-auto my-4 items-center justify-center text-center align-middle "
          />
        </div>
        <div className="text-stone-800 text-xl  ">{props.title}</div>
        <div className="text-stone-400 text-sm mt-4 px-10 mb-10">
          {props.desc}
        </div>
      </div>
    </>
  );
};

export default StepCard;
