import FeedbackCard from "../../Components/feedback/index";
const FeedbackSection = () => {
  return (
    <div className="w-full container mx-auto my-52 justify-center text-center items-center align-middle">
      <div className=" mt-24  mb-10 mx-auto flex flex-col    ">
        <div className=" justify-center flex text-gray-700 text-3xl font-semibold tracking-wide w-auto">
          <div>Feedback From Our</div>
          <div className="text-blue-900 mx-4 "> Trusted Community</div>
        </div>
        <div className="text-gray-400 my-2">
          What out trusted clients say about our service
        </div>
      </div>
      <div className="md:mx-24 mx-auto my-auto md:my-14">
        <FeedbackCard />
      </div>
    </div>
  );
};

export default FeedbackSection;
