import Head from "next/head";
import Button from "./Components/Button/index";

const Test = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-2xl font-semibold my-8">Buttons Components</div>
      <div className="flex flex-col  space-y-4 h-56 ">
        <div className="space-x-8">
          <div className="text-xl font-semibold my-4 ">Primary Button</div>
          <Button type="primary" size="sm" className="w-32 ">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Test;
