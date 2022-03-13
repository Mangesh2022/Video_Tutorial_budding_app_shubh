const Nav_Data = [
  {
    id: "e1",
    title: "AboutUs",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Explore",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Blog",
    isFeatured: false,
  },
];

const Navigation = () => {
  return (
    <div className="w-full ">
      <div className=" flex-nowrap mx-auto w-auto flex flex-row justify-between  ">
        {Nav_Data &&
          Nav_Data.map((data) => (
            <div className="mx-4 tracking-widest">{data.title}</div>
          ))}
      </div>
    </div>
  );
};

export default Navigation;
