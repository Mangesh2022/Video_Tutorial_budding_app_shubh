import {useRouter} from "next/router";
import Button from "../Components/ui/button";

import {getEventById} from "../../dummy-cleaning-site-data";
import EventSummary from "../Components/event-detail/event-summary";
import EventLogistics from "../Components/event-detail/event-logistics";
import EventContent from "../Components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found ! </p>;
  }

  return (
    <>
      <div className=" py-24 ">
        <div className=" flex flex-col bg-stone-100 border container mx-auto justify-center   items-center ">
          <div className="  mt-24 mb-14 text-stone-700 font-extralight ">
            <div className=" my-4 flex justify-center items-center">
              <Button link="/blogs">Show All Events</Button>
            </div>
            <div className="text-3xl mt-10">
              <EventSummary title={event.title} />
            </div>
          </div>
          <div className="">
            <EventLogistics
              date={event.date}
              image={event.image}
              imageAlt={event.title}
              Author={event.Author}
            />
          </div>
          <EventContent>
            <div className="py-10 text-stone-500">{event.description}</div>
          </EventContent>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;
