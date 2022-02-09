import {getAllEvents} from "../../dummy-cleaning-site-data";
import EventList from "../Components/events/event-list";
import EventSearch from "../Components/events/event-search";
import {useRouter} from "next/router";
import {Fragment} from "react";

const AllEventPages = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPages;
