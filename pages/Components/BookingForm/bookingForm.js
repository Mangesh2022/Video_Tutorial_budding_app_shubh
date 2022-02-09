import {data} from "autoprefixer";
import Button from "../ui/button";
import Head from "next/head";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: {error, isValid},
  } = useForm({mode: "all"});

  const onSubmit = (data) => console.log(data);

  /**Input fiels */
  const Input = ({label, id, value, required, type, placeholder}) => (
    <div className="flex flex-row justify-start align-top text-left px-8 items-center w-full">
      <legend className="py-2 my-2 text-stone-700  px-2 w-full text-lg">
        {label}
      </legend>

      <input
        {...register(label, {required})}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className="p-3 rounded-sm bg-stone-200 mx-4 justify-start border "
      />
    </div>
  );
  /**Group of form 1st */
  const ServisesFields = () => (
    <section className="w-full align-top items-start text-left my-8 px-4">
      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
        What Type of Deep Cleaning Services
        <br />
        Do You Want?
      </div>
      <div className="flex flex-col text-left w-full justify-start">
        <Input
          type="radio"
          id="active"
          value="Full"
          label="Full home deep cleaning services"
        />
        <Input
          type="radio"
          id="active"
          value="Full"
          label="Office-shop cleaning services"
        />
        <Input
          type="radio"
          id="active"
          label="Kitchen deep cleaning services"
        />
        <Input type="radio" id="active" label="Water Tank cleaning service" />

        <Input type="radio" id="active" label="Sofa cleaning services" />
        <Input type="radio" id="active" label="Carpet cleaning services" />
      </div>
    </section>
  );

  /**Group of form 2nd */
  const HomeSizeFieldFields = () => (
    <section className="w-full  align-top items-start text-left my-8 px-4">
      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
        Please Select The Size Of <br /> Your Home?
      </div>
      <div className="flex flex-col text-left w-full justify-start">
        <Input type="radio" id="active" value="Full" label="1 BHK Apartment" />
        <Input type="radio" id="active" value="Full" label="2 BHK Apartment" />
        <Input type="radio" id="active" value="Full" label="3 BHK Apartment" />
        <Input type="radio" id="active" value="Full" label="4 BHK Apartment" />
        <Input type="radio" id="active" value="Full" label="More" />
      </div>
    </section>
  );

  /**Group of form 3rd */
  const BookingDateFields = () => (
    <section className="w-full  align-top items-start text-left my-8 px-4">
      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
        Please Tell Us The Date
        <br /> And Location
      </div>
      <Input type="date" id="active" value="Full" label="Date" />
      <Input type="textarea" id="active" value="Full" label="Address" />
    </section>
  );

  /**Group of form 4th */
  const ContactFields = () => (
    <>
      <section className="w-full  align-top items-start text-left my-8 px-4">
        <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
          One Last Step To Complete
          <br /> Your Request
        </div>
        <Input
          type="text"
          placeholder="Your Name"
          id="active"
          required
          label="Your Name"
        />
        <Input
          type="number"
          placeholder="Enter your phon no."
          id="active"
          label="Phone no."
          required
        />
      </section>
    </>
  );

  /**Navigation Button */

  const NavigationButton = () => (
    <section className="my-8 ">
      {step > 0 && (
        <Button
          id="100"
          type="button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </Button>
      )}
      {step === FieldGroups.length - 1 && (
        <Button
          type="submit"
          disabled={!isValid}
          onClick={() => {
            alert("Successfully saved !");
          }}
        >
          Save
        </Button>
      )}
      {step < FieldGroups.length - 1 && (
        <Button
          type="button"
          pageone="disabled"
          disabled={!isValid}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      )}
    </section>
  );

  const [step, setStep] = useState(0);
  const FieldGroups = [
    <ServisesFields />,
    <HomeSizeFieldFields />,
    <BookingDateFields />,
    <ContactFields />,
  ];

  return (
    <div className="bg-stone-100 w-full py-24">
      <div className="flex flex-row container mx-auto ">
        <div className="bg-stone-700 w-1/2 flex-col flex justify-center align-middle items-center text-center ">
          s
        </div>
        <div className="w-full">
          <Head>
            <title>Multi Part Input Form | React/Nextjs</title>
            <meta
              name="description"
              content="Generatred by Home Cleaning service"
            />
          </Head>
          <main className="flex justify-center w-full mx-auto ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col  justify-center   items-center text-center align-middle"
            >
              <div className="  border bg-white  ">
                {FieldGroups[step]}
                <NavigationButton />
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
