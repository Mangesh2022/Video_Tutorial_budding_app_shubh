const Feedback_Data = [
  {
    id: "f1",
    User_name: "Johnson",
    Profile: "Finance analyst",
    Profile_Pic: "images/Heroimg3.jpg",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    isFeatured: false,
  },
  {
    id: "f2",
    User_name: "Emma Doe",
    Profile: "Finance analyst",
    Profile_Pic: "images/Heroimg3.jpg",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    isFeatured: false,
  },
  {
    id: "f3",
    User_name: "Methew den",
    Profile: "Finance analyst",
    Profile_Pic: "images/Heroimg3.jpg",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    isFeatured: false,
  },
];

const FeedbackCard = () => {
  return (
    <div className=" md:flex  space-y-4 md:w-auto container md:justify-between ">
      {Feedback_Data &&
        Feedback_Data.map((data) => (
          <>
            <div className="flex md:flex md:flex-col w-auto align-middle md:justify-center items-center ">
              <div className="flex flex-col  w-2/3 md:w-auto justify-center align-middle items-center text-center ">
                <div className="flex flex-col md:flex mx-2  ">
                  <img
                    src="/images/Heroimg3.jpg"
                    alt="Dp image"
                    className="rounded-full  flex justify-center align-middle md:my-2 w-8 md:w-14 md:h-14 h-8 "
                  />
                </div>
                <div className="flex  flex-col">
                  <div className="text-gray-800 text-sm  tracking-wider">
                    {data.User_name}
                  </div>
                  <div className="text-blue-900 text-xs tracking-wider my-1">
                    {data.Profile}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 my-4 leading-6 text-justify md:text-center mx-4">
                {data.Description}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default FeedbackCard;
