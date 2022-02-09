import Image from "next/dist/client/image";

const BlogCard = (props) => {
  if (props.type == "oldversion") {
    return (
      <>
        <div className="px-10 w-3/12   ">
          <div className=" flex flex-col text-center py-4 justify-center ">
            <div className="flex justify-center align-middle ">
              <img
                src={props.blogimg}
                className=" w-full flex justify-center rounded-md "
              />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-teal-300   flex justify-center py-1 px-4 absolute  -m-5 rounded-sm text-teal-800">
                {props.date}
              </div>
            </div>
            <div className=" pt-4 flex flex-col text-center">
              <div className="pt-4 text-lg">{props.title} </div>
              <div className="pt-1 px-4 pb-2 text-slate-500 text-sm ">
                {props.desc}
              </div>
            </div>
            <div className="flex justify-center text-rose-400 mb-10 font-bold">
              Read More
            </div>
          </div>
        </div>
      </>
    );
  }

  if (props.type === "latest") {
    if (props.id === "e1" || props.id === "e2" || props.id === "e3") {
      return (
        <div className="w-1/3">
          <div className="  m-4  shadow-xl  flex flex-col justify-center text-center">
            <div className=" relative  h-96 ">
              <div className=" bg-stone-700  relative flex flex-col justify-center text-center align-middle items-center h-full bg-opacity-50 hover:opacity-30  hover:bg-stone-200  z-20 ">
                <div className="absolute ">
                  <div className="text-stone-200     text-2xl py-4  font-bold  h-full  ">
                    {props.title}
                  </div>
                  <div className="text-stone-300 text-sm  ">{props.desc}</div>
                  <div className="text-white py-2">{props.date}</div>
                  <div className="text-sm  font-semibold text-white py-2">
                    Read More
                  </div>
                </div>
              </div>
              <div className=" top-0 left-0 h-full   w-full absolute">
                <img
                  src={props.blogimg}
                  layout="fill"
                  className="object-cover rounded-md object-center h-96 w-full bg-stone-700"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (props.id === "e4" || props.id === "e5" || props.id === "e6") {
      return (
        <div className="w-1/3">
          <div className="  m-4  shadow-xl  flex flex-col justify-center text-center">
            <div className=" relative  h-52 ">
              <div className=" bg-stone-700  relative flex flex-col justify-center text-center align-middle items-center h-full bg-opacity-50 hover:opacity-30  hover:bg-stone-200  z-20 ">
                <div className="absolute ">
                  <div className="text-stone-200     text-2xl py-4  font-bold  h-full  ">
                    {props.title}
                  </div>
                  <div className="text-stone-300 text-sm  ">{props.desc}</div>
                  <div className="text-white py-2">{props.date}</div>
                  <div className="text-sm  font-semibold text-white py-2">
                    Read More
                  </div>
                </div>
              </div>
              <div className=" top-0 left-0 h-full   w-full absolute">
                <img
                  src={props.blogimg}
                  layout="fill"
                  className="object-cover rounded-md object-center h-52 w-full bg-stone-700"
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="w-1/2">
            <div className="  m-4  shadow-xl  flex flex-col justify-center text-center">
              <div className=" relative  h-60 ">
                <div className=" bg-stone-700  relative flex flex-col justify-center text-center align-middle items-center h-full bg-opacity-50 hover:opacity-30  hover:bg-stone-200  z-20 ">
                  <div className="absolute ">
                    <div className="text-stone-200     text-2xl py-4  font-bold  h-full  ">
                      {props.title}
                    </div>
                    <div className="text-stone-300 text-sm  ">{props.desc}</div>
                    <div className="text-white py-2">{props.date}</div>
                    <div className="text-sm  font-semibold text-white py-2">
                      Read More
                    </div>
                  </div>
                </div>
                <div className=" top-0 left-0 h-full   w-full absolute">
                  <img
                    src={props.blogimg}
                    layout="fill"
                    className="object-cover rounded-md object-center h-60 w-full bg-stone-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <div>data not found</div>;
  }
};

export default BlogCard;
//
