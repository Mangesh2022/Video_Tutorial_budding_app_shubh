const CourseCards = (props) => {
  return (
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
