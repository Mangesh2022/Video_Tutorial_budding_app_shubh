import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <div className="py-2 px-8 bg-stone-700  text-white ">
        <Link href={props.link}>
          <a>{props.children}</a>
        </Link>
      </div>
    );
  }
  if (props.id === "100") {
    return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="py-2 px-8 mx-4 my-2 border bg-stone-700  text-white shadow-md "
      >
        {props.children}
      </button>
    );
  }
  if (props.position === "left") {
    return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="py-2 my-2 border bg-stone-700 text-left px-4 text-xl  text-white "
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="py-2 px-8  my-4  bg-stone-700  text-white shadow-md"
    >
      {props.children}
    </button>
  );
};

export default Button;
