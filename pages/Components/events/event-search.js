import Button from "../../Components/ui/button";
import {useRef} from "react";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function sumbitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form
      onSubmit={sumbitHandler}
      className="flex flex-row justify-center align-middle text-center items-center"
    >
      <div className="bg-stone-300 flex flex-row justify-center align-middle text-center items-center my-24 py-2  px-8 ">
        <div className="flex mx-10  p-4">
          <div className="mx-10">
            <label htmlFor="year" className="px-4">
              Year
            </label>
            <select id="year" ref={yearInputRef} className=" bg-white px-2">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
          <div className="mx-10">
            <label htmlFor="month" className="px-4">
              Month
            </label>
            <select id="month" ref={monthInputRef} className="bg-white px-2">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row mr-8">
          <Button type="primery">Find Event</Button>
        </div>
      </div>
    </form>
  );
};

export default EventSearch;
