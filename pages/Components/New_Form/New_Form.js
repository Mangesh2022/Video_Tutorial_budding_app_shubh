import {data} from "autoprefixer";
import Button from "../ui/button";
import Head from "next/head";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Image from "next/dist/client/image";

export default function New_Form() {
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
      <div className=" w-full space-y-2 ">
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option1"
            className="hidden peer"
          />
          <label
            for="option1"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Full home deep cleaning services</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option2"
            className="hidden peer"
          />
          <label
            for="option2"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Kitchen deep cleaning services</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option3"
            className="hidden peer"
          />
          <label
            for="option3"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Office-shop cleaning services</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option4"
            className="hidden peer"
          />
          <label
            for="option4"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Water Tank cleaning service</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option5"
            className="hidden peer"
          />
          <label
            for="option5"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Sofa cleaning services</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option6"
            className="hidden peer"
          />
          <label
            for="option6"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>Carpet cleaning services</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
      </div>
    </section>
  );

  /**Group of form 2nd */
  const HomeSizeFieldFields = () => (
    <section className="  align-top items-start text-left my-8  px-4">
      <div className="bg-stone-700 py-4 my-14 px-8  flex justify-center text-center  text-stone-200 font-semibold text-xl ">
        Please Select The Size Of Your Home?
      </div>
      <div className=" w-full space-y-2">
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option1"
            className="hidden peer"
          />
          <label
            for="option1"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>1 BHK Appartment</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option2"
            className="hidden peer"
          />
          <label
            for="option2"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>2 BHK Appartment</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option3"
            className="hidden peer"
          />
          <label
            for="option3"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>3 BHK Appartment</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option4"
            className="hidden peer"
          />
          <label
            for="option4"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>4 BHK Appartment</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="Full home deep cleaning services"
            id="option5"
            className="hidden peer"
          />
          <label
            for="option5"
            className="flex gap-4 p-4 bg-gray-100 bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-75 peer-checked:bg-stone-200 peer-checked:text-stone-800 cursor-pointer transition "
          >
            <div>More</div>
          </label>
          <div className="absolute flex top-0 right-4 bottom-0 w-6 h-6 my-auto scale-0 peer-checked:scale-100 transition delay-100 rounded-full bg-stone-700">
            <img src="/images/tick.png" className="p-1" />
          </div>
        </div>
      </div>
    </section>
  );

  /**Group of form 3rd */
  const BookingDateFields = () => (
    <section className="w-full  align-top items-start text-left my-8 px-4">
      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
        Please Tell Us The Date And Location
      </div>
      <Input type="date" id="active" value="Date" label="Date" />
      <Input type="textarea" id="active" value="Fill" label="Address" />
    </section>
  );

  /**Group of form 4th */
  const ContactFields = () => (
    <>
      <section className="w-full  align-top items-start text-left my-8 px-4">
        <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
          One Last Step To Complete Your Request
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
        <div className="flex w-full justify-center">
          <div className="w-1/3">
            <Head>
              <title>Multi Part Input Form | React/Nextjs</title>
              <meta
                name="description"
                content="Generatred by Home Cleaning service"
              />
            </Head>
            <main className="flex justify-center w-full  ">
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
    </div>
  );
}
