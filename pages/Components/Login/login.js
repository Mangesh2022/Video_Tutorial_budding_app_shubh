import {data} from "autoprefixer";
import Button from "../ui/button";
import Head from "next/head";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: {error, isValid},
  } = useForm({mode: "all"});

  const onSubmit = (data) => console.log(data);

  /**Input fiels */
  const Input = ({label, required, type, placeholder}) => (
    <div className="">
      <legend className="py-2  text-teal-700 text-lg">{label}</legend>
      <input
        {...register(label, {required})}
        type={type}
        placeholder={placeholder}
        className="p-3 rounded-md bg-slate-200  w-full border "
      />
    </div>
  );
  /**Group of form 1st */
  const LoginFields = () => (
    <section className="w-full align-top items-start text-left my-24">
      <div className="flex justify-start text-xl text-rose-500 my-4">Login</div>
      <div className="flex flex-col">
        <Input
          label="User Name"
          required
          type="text"
          placeholder="Ex: Raj123"
        />
        <Input label="Password" required type="password" />
      </div>
    </section>
  );

  /**Navigation Button */

  const NavigationButton = () => (
    <section className="mt-24 mb-8">
      {step === FieldGroups.length - 1 && (
        <Button
          type="submit"
          disabled={!isValid}
          onClick={() => {
            alert("Successfully Login !");
          }}
        >
          Login
        </Button>
      )}
    </section>
  );

  const [step, setStep] = useState(0);
  const FieldGroups = [<LoginFields />];

  return (
    <div>
      <Head>
        <title>User Login Form | React/Nextjs</title>
        <meta name="description" content="Login on Home Cleaning service" />
      </Head>
      <main className="container mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col  justify-center  rounded-xl  items-center text-center align-middle"
        >
          <div className=" my-14 border bg-slate-100 rounded-xl p-4 w-1/3 ">
            <div className="bg-teal-400 py-4 mt-14 px-8   rounded-md text-white font-semibold text-xl ">
              User Login
            </div>
            {FieldGroups[step]}
            <NavigationButton />
          </div>
        </form>
      </main>
    </div>
  );
}
