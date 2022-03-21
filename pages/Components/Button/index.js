// const Button = (props) => {
//   if (props.type === "primery") {
//     return (
//       <>
//         <button>
//           <div className=" flex justify-center align-middle text-center items-center  ">
//             <div className="px-6 py-2 text-sm text-center bg-blue-900 text-white rounded-sm  ">
//               {props.children}
//             </div>
//           </div>
//         </button>
//       </>
//     );
//   }
//   if (props.type === "secondery") {
//     return (
//       <div className=" flex justify-center align-middle text-center items-center  ">
//         <div className="px-6 py-2 text-sm text-center border border-blue-900 text-blue-900  ">
//           {props.children}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className=" flex justify-center align-middle text-center items-center  ">
//         <div className="text-sm text-center font-bold text-blue-900   ">
//           {props.children}
//         </div>
//       </div>
//     );
//   }
// };

// export default Button;
import React, {ReactElement} from "react";

function Button({size, children, onClick, disabled, type, className}) {
  const sizes = {
    sm: "p-1 text-sm tracking-wider",
    md: "py-2 px-4 ",
    lg: "py-4 px-8",
  };

  const colors = {
    primary: "active:bg-blue-600 hover:bg-blue-400 bg-blue-500 text-white",
    secondary:
      "active:bg-blue-700 active:text-white hover:bg-blue-50 bg-white text-blue-700 border border-blue-600",
  };

  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={` w-full ${colors[type]}  ${sizes[size]} rounded outline-none  ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
