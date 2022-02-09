//import classes from "./event-logistics.module.css";

function LogisticsItem(props) {
  const {icon: Icon} = props;

  return (
    <li>
      <span></span>
      <span>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
