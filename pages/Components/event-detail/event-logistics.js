import LogisticsItem from "./logistics-item";
//import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const {date, Author, image, imageAlt} = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //  const addressText = address.replace(",", "\n");

  return (
    <section>
      <div className="mb-4 bg-stone-700">
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className="text-stone-400 flex justify-center items-center text-center py-4">
        <LogisticsItem>
          <time>{humanReadableDate}</time>
          <div className="text-stone-700 font-semibold">User: {Author}</div>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
