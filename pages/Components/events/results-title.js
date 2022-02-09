import Button from "../../Components/ui/button";
//import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const {date} = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-24 justify-center flex flex-col items-center align-middle text-center">
      <div className="bg-stone-300 px-32 py-4  flex justify-center align-middle text-center items-center">
        <div className="mr-14   text-stone-50 font-semibold">
          Events in {humanReadableDate}
        </div>
        <Button className="" link="/blogs">
          Show all events
        </Button>
      </div>
    </section>
  );
}

export default ResultsTitle;
