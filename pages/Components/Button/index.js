const Button = (props) => {
  if (props.type === "primery") {
    return (
      <>
        <button>
          <div className=" flex justify-center align-middle text-center items-center  ">
            <div className="px-6 py-2 text-sm text-center bg-blue-900 text-white rounded-sm  ">
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
        <div className="px-6 py-2 text-sm text-center border border-blue-900 text-blue-900  ">
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex justify-center align-middle text-center items-center  ">
        <div className="text-sm text-center font-bold text-blue-900   ">
          {props.children}
        </div>
      </div>
    );
  }
};

export default Button;
