const Button = (props) => {
  if (props.type === "primery") {
    return (
      <>
        <button>
          <div className=" flex justify-center align-middle text-center items-center  ">
            <div className="px-6 py-2 text-sm text-center bg-stone-700 text-white  ">
              {props.children}
            </div>
          </div>
        </button>
      </>
    );
  }
  if (props.type === "secondery") {
    return (
      <div className=" flex justify-center align-middle text-center items-center  ">
        <div className="px-6 py-2 text-sm text-center border border-black text-stone-700 text-white  ">
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex justify-center align-middle text-center items-center  ">
        <div className="text-sm text-center font-bold text-stone-700 text-white  ">
          {props.children}
        </div>
      </div>
    );
  }
};

export default Button;
