import {connectToDatabase, ObjectId} from "../../utils/mongodb";

export default async (req, res) => {
  const {db} = await connectToDatabase();

  // const newProd = {
  //   id: "10",
  //   title: "Product Title",
  //   description:
  //     "We provide a wide range of Home cleaning service near by you. ",
  //   image: "images/cardimg.png",
  //   isFeatured: true,
  // };

  // const createServices = await db.collection("carddata").insertOne(newProd);
  // console.log({createServices});

  // const services1 = await db
  //   .collection("carddata")
  //   .deleteOne({_id: "61f121edc3d90145dd729df0"});

  const services = await db.collection("carddata").find({}).toArray();
  // const services = [
  //   {
  //     id: "01",
  //     title: "Product Title",
  //     description:
  //       "We provide a wide range of Home cleaning service near by you. ",
  //     image: "images/cardimg.png",
  //     isFeatured: true,
  //   },
  // ];

  console.log("API executed... Data Fetched: ", services.length);
  // .sort({ metacritic: -1 })
  // .limit(20)
  // .toArray();
  console.log({services});

  res.json(services);
};
