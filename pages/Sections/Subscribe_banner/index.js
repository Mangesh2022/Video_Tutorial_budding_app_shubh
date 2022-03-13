const Subscribe_banner = () => {
  return (
    <div className="w-full bg-gray-800 my-24 px-4 ">
      <div className="flex container mx-auto flex-col justify-center align-middle items-center text-center py-28">
        <div className="flex justify-center text-white text-3xl font-semibold tracking-wide w-full">
          Take the next step toward your professional goals
        </div>
        <div className="my-10  flex flex-row border-2 border-white rounded-md justify-center align-middle items-center">
          <div className="">
            <input
              type="text"
              placeholder="Your Email here.."
              className="md:w-96 h-10 px-4  "
            />
          </div>
          <button className="bg-blue-900  py-2 px-8 text-white rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe_banner;
