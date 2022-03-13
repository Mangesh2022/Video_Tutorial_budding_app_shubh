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
    <div className=" flex md:w-full container justify-between ">
      {Feedback_Data &&
        Feedback_Data.map((data) => (
          <>
            <div className="">
              <div className="flex my-4 justify-center align-middle items-center text-left ">
                <div className="flex flex-row mx-4  ">
                  <img
                    src="/images/Heroimg3.jpg"
                    alt="Dp image"
                    className="rounded-full  flex justify-center align-middle w-16 h-16 "
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-gray-800 text-sm  tracking-wider">
                    {data.User_name}
                  </div>
                  <div className="text-blue-900 text-xs tracking-wider my-1">
                    {data.Profile}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 my-6 mx-8">
                {data.Description}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default FeedbackCard;
