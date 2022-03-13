import * as React from "react";
import Button from "../Components/ui/button";

const Test = () => {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [formObject, setFormObject] = React.useState({
    Service1: "",
    Service2: "",
    date: "",
    address: "",
    name: "",
    email: "",
    phone: "",
  });
  const [selected, setSelected] = React.useState("");

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    setFormObject({
      Service1: event.target.value,
      Service2: "",
      date: "",
      address: "",
      name: "",
      phone: "",
    });
  };

  const ChangeSelectOptionHanddler2 = (event) => {
    setFormObject({
      ...formObject,
      Service2: event.target.value,
    });
    // alert(event.target.value);
  };

  const DateHanddler = (event) => {
    setFormObject({
      ...formObject,
      date: event.target.value,
    });
    // setFormObject({
    //   ...formObject,
    //   step2: {...formObject.step2, date: event.target.value},
    // });
    alert(formObject.date);
  };

  const AddressHandler = (event) => {
    setFormObject({
      ...formObject,
      address: event.target.value,
    });
  };
  const NameHandler = (event) => {
    setFormObject({
      ...formObject,
      name: event.target.value,
    });
  };
  const PhoneHandler = (event) => {
    setFormObject({
      ...formObject,
      phone: event.target.value,
    });
  };
  const EmailHandler = (event) => {
    setFormObject({
      ...formObject,
      email: event.target.value,
    });
  };

  const FormSubmit = () => {
    console.log(formObject);
  };

  /** Different arrays for different dropdowns */
  const home = ["choose..", "new home 1", "new home 12", "new home 14"];
  const Kitchen = [
    "choose..",
    "Kitchen++",
    "Kitchen1",
    "Kitchen2",
    "Kitchen3#",
  ];
  const Office = ["choose..", "office1", "office2", "office3", "office4"];
  const Tank = ["choose..", "tank1", "tank2", "tank3", "tank4"];
  const Sofa = ["choose..", "sofa1", "sofa2", "sofa3", "sofa4"];
  const Car = ["choose..", "car", "car1", "car3", "car4"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Full home deep cleaning services") {
    type = home;
  } else if (selected === "Kitchen deep cleaning services") {
    type = Kitchen;
  } else if (selected === "Office-shop cleaning services") {
    type = Office;
  } else if (selected === "Water Tank cleaning service") {
    type = Tank;
  } else if (selected === "Sofa cleaning services") {
    type = Sofa;
  } else if (selected === "Carpet cleaning services") {
    type = Car;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div
      className="mx-auto container  pt-40 pb-20 "
      //   style={{
      //     padding: "16px",
      //     margin: "16px",
      //   }}
    >
      <div className="flex my-12 text-3xl align-middle items-center text-center justify-center">
        Place Your Order and Get Free Quote
      </div>
      <form className=" py-20 rounded-xl px-12 flex justify-between space-x-28 bg-stone-800">
        {/**step1 */}
        <div className="  flex flex-col   w-1/3  ">
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <div className="text-stone-100 text-2xl mb-14 border-b pb-4">
            What Type of Deep Cleaning Services Do You Want?
          </div>
          <select
            onChange={changeSelectOptionHandler}
            className="text-xl bg-white  w-full"
          >
            <option>Choose...</option>
            <option>Full home deep cleaning services</option>
            <option>Kitchen deep cleaning services</option>
            <option>Office-shop cleaning services</option>
            <option>Water Tank cleaning service</option>
            <option>Sofa cleaning services</option>
            <option>Carpet cleaning services</option>
          </select>
          <div className=" my-8  ">
            <select className="text-xl bg-white w-full">
              {
                /** This is where we have used our options variable */
                options
              }
            </select>
          </div>
          <div className="   ">
            <select
              className="text-xl bg-white w-full "
              onChange={ChangeSelectOptionHanddler2}
            >
              {
                /** This is where we have used our options variable */
                options
              }
            </select>
          </div>
        </div>
        {/**step2 */}
        <div className="  flex flex-col   w-1/3  ">
          <div className="text-stone-100 text-2xl mb-14 border-b pb-4">
            Please Tell Us The Date And Location
          </div>
          <label className="bg-stone-800 text-xl  text-stone-100 ">
            Date:
            <input
              type="date"
              className="text-stone-800 ml-36"
              onChange={DateHanddler}
            ></input>
          </label>
          <label className="bg-stone-800 text-xl mt-6 w-full text-stone-100 ">
            Address:
            <input
              type="text"
              placeholder="Please enter your Address"
              className="text-stone-800 text-xl my-2 text-left w-full h-14 align-top flex  justify-start "
              onChange={AddressHandler}
            ></input>
          </label>
        </div>
        {/**step3 */}
        <div className="  flex flex-col   w-1/3  ">
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <div className="text-stone-100 text-2xl mb-14 border-b pb-4">
            One Last Step To Complete Your Request
          </div>
          <div>
            <label className="bg-stone-800 flex justify-between text-xl text-stone-100 ">
              Name:
              <input
                type="text"
                className="text-stone-800  "
                onChange={NameHandler}
              ></input>
            </label>
            <label className="bg-stone-800 flex justify-between text-xl text-stone-100 my-8">
              Email ID:
              <input
                type="text"
                className="text-stone-800 "
                onChange={EmailHandler}
              ></input>
            </label>
            <label className="bg-stone-800 flex justify-between text-xl text-stone-100 my-8">
              Phone no:
              <input
                type="text"
                className="text-stone-800 "
                onChange={PhoneHandler}
              ></input>
            </label>
          </div>
        </div>
      </form>
      <div className="flex my-8 align-middle items-center text-center justify-center">
        <Button type="secondery" onClick={FormSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Test;
