import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-cleaning-site-data";
import EventList from "../Components/events/event-list";
import ResultsTitle from "../Components/events/results-title";
import {Fragment} from "react";
import Button from "../Components/ui/button";

const FilteredEventPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">loading..</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2015 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className="text-center  text-white py-24">
          <div className="my-10 border container bg-stone-100  mx-auto">
            <div className="my-8 text-stone-700  font-semibold text-2xl">
              Invalid filter!
              <br /> Please Adjust The Values
            </div>
            <div className="container mx-auto my-4 flex justify-center items-center">
              <Button link="/blogs">Show All Events</Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="text-center text-white py-24">
        <div className="my-10 border container bg-stone-100  mx-auto">
          <div className="my-8 text-stone-700  font-semibold text-2xl">
            No Events Found
          </div>
          <div className="container mx-auto my-4 flex justify-center items-center">
            <Button link="/blogs">Show All Events</Button>
          </div>
        </div>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <div className=" ">
        <div className="container mx-auto py-32  ">
          <div className="bg-stone-100 border">
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredEventPage;
