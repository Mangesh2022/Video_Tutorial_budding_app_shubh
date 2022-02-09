import Button from "../../Components/ui/button";

const EventItem = (props) => {
  const {title, image, date, description, id} = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <div className="flex w-2/3 mx-auto flex-col justify-center my-8  items-center align-middle text-left">
      <li>
        <div className="flex flex-row justify-center border-black border  align-middle items-center">
          <img src={"/" + image} alt={title} className="bg-stone-700 " />
          <div className="py-2 flex justify-center items-center">
            <div className="mr-4 w-2/4 ">
              <div className="text-stone-700 font-semibold text-2xl">
                {title}
              </div>
              <div className="text-stone-400 pt-2 pb-1 text-base tracking-wider leading-6">
                {description}
              </div>
              <div className="text-stone-700 font-semibold text-sm">
                <time>{humanReadableDate}</time>
              </div>
            </div>
            <div className="">
              <Button link={exploreLink}>Explore Event</Button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default EventItem;
