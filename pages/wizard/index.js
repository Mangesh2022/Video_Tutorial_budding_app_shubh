import {data} from "autoprefixer";
import Button from "../Components/ui/button";
import Head from "next/head";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Image from "next/dist/client/image";

const Wizard = () => {
  const [activePage, setActivePage] = useState("step1");
  const [pageToActiveNext, setNextActivePage] = useState("");
  const [pagePreviousActive, setPreviousActivePage] = useState("");

  const setNextPage = (pageName) => {
    setPreviousActivePage(activePage);
    setNextActivePage(pageName);
  };
  const moveNext = (pageName) => {
    setActivePage(pageToActiveNext);
  };
  const movePreviously = (pageName) => {
    setPreviousActivePage(activePage);
    setActivePage(pageToActiveNext);
  };
  const submitForm = () => {};

  const Input = ({label, id, value, required, type, placeholder = ""}) => (
    <div className="flex flex-row justify-start align-top text-left px-8 items-center w-full">
      <legend className="py-2 my-2 text-stone-700  px-2 w-full text-lg">
        {label}
      </legend>

      <input
        // {...register(label, {required})}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className="p-3 rounded-sm bg-stone-200 mx-4 justify-start border "
      />
    </div>
  );

  return (
    <>
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
                {/* <form className=" flex flex-col  justify-center   items-center text-center align-middle"> */}
                <div className="  border bg-white  ">
                  {/* /////////////////////////////////// */}
                  {activePage === "step1" && (
                    <section className="w-full align-top items-start text-left my-8 px-4">
                      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
                        What Type of Deep Cleaning Services
                        <br />
                        Do You Want?
                      </div>
                      <div className=" w-full space-y-2 ">
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("home")}
                        >
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
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("kitchen")}
                        >
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
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("office")}
                        >
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
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("waterTank")}
                        >
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
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("sofa")}
                        >
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
                        <div
                          className="relative"
                          onClick={(e) => setNextPage("carpet")}
                        >
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
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          moveNext(pageToActiveNext);
                        }}
                      >
                        Next
                      </Button>
                    </section>
                  )}
                  {/* /////////////////////////////////// */}
                  {activePage === "home" && (
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
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          movePreviously("step1");
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          moveNext("step3");
                        }}
                      >
                        Next
                      </Button>
                    </section>
                  )}
                  {activePage === "kitchen" && (
                    <section className="  align-top items-start text-left my-8  px-4">
                      <div className="bg-stone-700 py-4 my-14 px-8  flex justify-center text-center  text-stone-200 font-semibold text-xl ">
                        Please Select The Size Of Your Kitchen?
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
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          movePreviously("step1");
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          moveNext("step3");
                        }}
                      >
                        Next
                      </Button>
                    </section>
                  )}
                  {activePage === "office" && <h1>office</h1>}
                  {activePage === "waterTank" && <h1>waterTank</h1>}
                  {activePage === "sofa" && <h1>sofa</h1>}
                  {activePage === "carpet" && <h1>carpet</h1>}

                  {activePage === "step3" && (
                    <section className="w-full  align-top items-start text-left my-8 px-4">
                      <div className="bg-stone-700 py-4 my-14 px-8 flex justify-center text-center  text-stone-200 font-semibold text-xl ">
                        Please Tell Us The Date And Location
                      </div>
                      <Input
                        type="date"
                        id="active"
                        value="Date"
                        label="Date"
                      />
                      <Input
                        type="textarea"
                        id="active"
                        value="Fill"
                        label="Address"
                      />
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          movePreviously(pagePreviousActive);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          moveNext("step4");
                        }}
                      >
                        Next
                      </Button>
                    </section>
                  )}
                  {activePage === "step4" && (
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
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          movePreviously("step3");
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        id="100"
                        type="button"
                        onClick={() => {
                          submitForm();
                        }}
                      >
                        Next
                      </Button>
                    </section>
                  )}
                </div>
                {/* </form> */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wizard;
