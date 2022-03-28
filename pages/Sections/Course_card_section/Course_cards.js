const CourseCards = (props) => {
  return props.dropoff === "on" ? (
    <div className="w-96  mb-44 flex ">
      <>
        <div className=" flex w-full mx-4 flex-wrap  relative justify-between align-middle  text-left">
          <div className=" w-full md:h-60 sm:h-52 relative flex justify-start items-start text-left  ">
            <img
              src={props.Course_Cover_source}
              alt="coverpage"
              className="rounded-t-3xl "
            />
            <div className="bg-white w-full md:h-60 sm:h-52 top-0 bottom-0 left-0 right-0 absolute opacity-70 rounded-t-3xl"></div>
          </div>
          <div className=" w-full text-gray-400 mt-4  absolute ">
            <div className="mx-4 bg-white border-2 my-48 rounded-xl border-gray-400 p-4">
              <div className="text-sm my-4  h-10 flex w-auto items-start align-top    mx-auto  font-semibold">
                {props.title}
              </div>
              <div className="flex flex-row my-4 text-xs w-full mx-auto justify-left ">
                <div className="mr-8 font-semibold ">{props.author}</div>
                <div>{props.subject}</div>
              </div>

              <div className="flex   font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto justify-between">
                <div className="flex flex-row align-bottom items-end text-center justify-center">
                  <img src="/images/module.svg" alt="img" className="mr-2" />
                  {props.module} Module
                </div>
                <div className="flex flex-row align-bottom items-end text-center justify-center">
                  <img src="/images/session.svg" alt="img" className="mr-2" />
                  {props.session} Min/Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  ) : props.download_certificate === "on" ? (
    <div className="w-96  mb-44 flex ">
      <>
        <div className=" flex w-full mx-4 flex-wrap  relative justify-between align-middle  text-left">
          <div className=" w-full md:h-60 sm:h-52 relative flex justify-start items-start text-left  ">
            <img
              src={props.Course_Cover_source}
              alt="coverpage"
              className="rounded-t-3xl "
            />
          </div>
          <div className=" w-full   absolute ">
            <div className="relative  w-full">
              <div className="absolute">
                <div className=" bg-white border-2 my-48 rounded-t-xl border-gray-400 p-4">
                  <div className="text-sm my-4  h-10 flex w-auto items-start align-top    mx-auto  font-semibold">
                    {props.title}
                  </div>
                  <div className="flex flex-row my-4 text-xs w-full mx-auto justify-left ">
                    <div className="mr-8 font-semibold text-gray-500">
                      {props.author}
                    </div>
                    <div>{props.subject}</div>
                  </div>

                  <div className="flex text-gray-500  font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto justify-between">
                    <div className="flex flex-row align-bottom items-end text-center justify-center">
                      <img
                        src="/images/module.svg"
                        alt="img"
                        className="mr-2"
                      />
                      {props.module} Module
                    </div>
                    <div className="flex flex-row align-bottom items-end text-center justify-center">
                      <img
                        src="/images/session.svg"
                        alt="img"
                        className="mr-2"
                      />
                      {props.session} Min/Session
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative   h-36 flex justify-center align-middle text-center w-full items-end">
            <div className="bg-cyan-600 text-white py-1 px-8  w-full">
              Download Certificate
            </div>
          </div>
        </div>
      </>
    </div>
  ) : props.size === "sm" ? (
    <div className="w-60 mx-4  mb-16  ">
      <>
        <div className=" flex  w-full    relative align-middle  text-left">
          <div className=" w-full  relative flex ">
            <img
              src={props.Course_Cover_source}
              alt="coverpage"
              className="rounded-t-xl "
            />
          </div>
          <div className=" w-full absolute ">
            <div className=" bg-white border-2 my-36   rounded-xl border-gray-400 p-2">
              <div className="text-xs   flex w-auto items-start align-top    mx-auto  font-semibold">
                {props.title}
              </div>
              <div className="flex flex-row my-2 text-xs justify-between w-full mx-auto justify-left ">
                <div className=" font-semibold text-gray-500">
                  {props.author}
                </div>
                <div>{props.subject}</div>
              </div>

              <div className="flex text-gray-500 justify-between  font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto items-center align-middle text-center">
                <div className="flex flex-row align-bottom  text-center justify-center">
                  <img
                    src="/images/module.svg"
                    alt="img"
                    className="w-3 h-3 mr-1"
                  />
                  {props.module} Module
                </div>
                <div className="flex flex-row align-bottom items-c  enter text-center justify-center">
                  <img
                    src="/images/session.svg"
                    alt="img"
                    className=" w-3 h-3 mr-1"
                  />
                  {props.session} Min/Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  ) : (
    <div className="w-96  mb-44 flex ">
      <>
        <div className=" flex w-full mx-4 flex-wrap  relative justify-between align-middle  text-left">
          <div className=" w-full md:h-60 sm:h-52 relative flex justify-start items-start text-left  ">
            <img
              src={props.Course_Cover_source}
              alt="coverpage"
              className="rounded-t-3xl "
            />
          </div>
          <div className=" w-full     absolute ">
            <div className="mx-4 bg-white border-2 my-48 rounded-xl border-gray-400 p-4">
              <div className="text-sm my-4  h-10 flex w-auto items-start align-top    mx-auto  font-semibold">
                {props.title}
              </div>
              <div className="flex flex-row my-4 text-xs w-full mx-auto justify-left ">
                <div className="mr-8 font-semibold text-gray-500">
                  {props.author}
                </div>
                <div>{props.subject}</div>
              </div>

              <div className="flex text-gray-500  font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto justify-between">
                <div className="flex flex-row align-bottom items-end text-center justify-center">
                  <img src="/images/module.svg" alt="img" className="mr-2" />
                  {props.module} Module
                </div>
                <div className="flex flex-row align-bottom items-end text-center justify-center">
                  <img src="/images/session.svg" alt="img" className="mr-2" />
                  {props.session} Min/Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );

  // props.width === "1/4" ? (
  //   <div className="w-1/4 mb-44 flex ">
  //     <>
  //       <div className=" flex w-full mx-4 flex-wrap flex-col relative justify-between align-middle  text-left">
  //         <div className=" w-full h-60 relative flex justify-start items-start text-left  ">
  //           <img
  //             src={props.Course_Cover_source}
  //             alt="coverpage"
  //             className="rounded-t-3xl "
  //           />
  //         </div>
  //         <div className=" w-full     absolute ">
  //           <div className="mx-4 bg-white border-2 my-48 rounded-xl border-gray-400 p-4">
  //             <div className="text-sm my-4 h-10 flex w-full items-start align-top    mx-auto  font-semibold">
  //               {props.title}
  //             </div>
  //             <div className="flex flex-row my-4 text-xs w-full mx-auto justify-left ">
  //               <div className="mr-8 font-semibold text-gray-500">
  //                 {props.author}
  //               </div>
  //               <div>{props.subject}</div>
  //             </div>

  //             <div className="flex text-gray-500  font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto justify-between">
  //               <div className="flex flex-row align-bottom items-end text-center justify-center">
  //                 <img src="images/module.svg" alt="img" className="mr-2" />
  //                 {props.module} Module
  //               </div>
  //               <div className="flex flex-row align-bottom items-end text-center justify-center">
  //                 <img src="images/session.svg" alt="img" className="mr-2" />
  //                 {props.session} Min/Session
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   </div>
  // ) : props.sizesmall === "small" ? (
  //   <div className="w-full  flex ">
  //     <>
  //       <div className=" flex w-full mx-2 flex-wrap flex-col relative justify-between align-middle  text-left">
  //         <div className=" w-full h-60 relative flex justify-start items-start text-left  ">
  //           <img
  //             src={props.Course_Cover_source}
  //             alt="coverpage"
  //             className="rounded-t-md "
  //           />
  //         </div>
  //         <div className=" w-full     absolute ">
  //           <div className="mx-2 bg-white border my-28 rounded-xl border-gray-400 px-2 py-4">
  //             <div className="text-xs h-10 flex w-full items-start align-top    mx-auto  font-semibold">
  //               {props.title}
  //             </div>
  //             <div className="flex flex-row  my-1 text-xs w-full mx-auto justify-between ">
  //               <div className="mr-1  text-gray-500">{props.author}</div>
  //               <div>{props.subject}</div>
  //             </div>

  //             <div className="flex text-gray-500  font-medium tracking-wider  flex-row text-xs mt-2 w-full mx-auto justify-between">
  //               <div className="flex flex-row align-bottom items-end text-center  justify-center">
  //                 <img
  //                   src="images/module.svg"
  //                   alt="img"
  //                   className="mr-1 w-4 h-4"
  //                 />
  //                 {props.module} Module
  //               </div>
  //               <div className="flex flex-row align-bottom items-end text-center justify-center">
  //                 <img
  //                   src="images/session.svg"
  //                   alt="img"
  //                   className="mr-1 w-4 h-4"
  //                 />
  //                 {props.session} Min/Session
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   </div>
  // ) : (
  //   <div className="w-full mb-44 flex ">
  //     <>
  //       <div className=" flex w-full mx-4 flex-wrap flex-col relative justify-between align-middle  text-left">
  //         <div className=" w-full h-60 relative flex justify-start items-start text-left  ">
  //           <img
  //             src={props.Course_Cover_source}
  //             alt="coverpage"
  //             className="rounded-t-3xl "
  //           />
  //         </div>
  //         <div className=" w-full     absolute ">
  //           <div className="mx-4 bg-white border-2 my-48 rounded-xl border-gray-400 p-4">
  //             <div className="text-sm my-4 h-10 flex w-full items-start align-top    mx-auto  font-semibold">
  //               {props.title}
  //             </div>
  //             <div className="flex flex-row my-4 text-xs w-full mx-auto justify-left ">
  //               <div className="mr-8 font-semibold text-gray-500">
  //                 {props.author}
  //               </div>
  //               <div>{props.subject}</div>
  //             </div>

  //             <div className="flex text-gray-500  font-medium tracking-wider  flex-row text-xs mb-2 w-full mx-auto justify-between">
  //               <div className="flex flex-row align-bottom items-end text-center justify-center">
  //                 <img src="images/module.svg" alt="img" className="mr-2" />
  //                 {props.module} Module
  //               </div>
  //               <div className="flex flex-row align-bottom items-end text-center justify-center">
  //                 <img src="images/session.svg" alt="img" className="mr-2" />
  //                 {props.session} Min/Session
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   </div>
  // );
};

export default CourseCards;
