//import classes from './event-summary.module.css';

function EventSummary(props) {
  const {title} = props;

  return (
    <section>
      <h1 className="font-semibold">{title}</h1>
    </section>
  );
}

export default EventSummary;
