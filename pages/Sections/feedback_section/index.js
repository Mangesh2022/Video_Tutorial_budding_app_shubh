import FeedbackCard from "../../Components/feedback/index";
const FeedbackSection = () => {
  return (
    <div className="w-full container mx-auto my-52 justify-center text-center items-center align-middle">
      <div className=" mt-24  mb-10 mx-auto flex flex-col    ">
        <div className=" justify-center inline-flex text-gray-700 text-3xl font-semibold tracking-wide w-auto">
          Feedback From Our
          <div className="text-blue-900 ml-auto "> Trusted Community</div>
        </div>
        <div className="text-gray-400 my-2">
          What out trusted clients say about our service
        </div>
      </div>
      <div className="md:mx-24 mx-4 my-8 md:my-14">
        <FeedbackCard />
      </div>
    </div>
  );
};

export default FeedbackSection;
