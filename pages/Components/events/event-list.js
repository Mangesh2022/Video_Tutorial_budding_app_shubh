import {list} from "postcss";
import EventItem from "./event-item";
//import classes from "./event-list.module.css";

const EventList = (props) => {
  const {items} = props;
  return (
    <ul className="py-14   ">
      {items.map((event) => (
        <EventItem
          key={list.id}
          id={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
