import {getAllEvents} from "../../../dummy-cleaning-site-data";
import BlogCard from "../BlogCard/blogCard";

export default function Blogs() {
  const BlogData = getAllEvents();

  return (
    <>
      <div className="my-24 container mx-auto px-40">
        <div className="text-3xl font-semibold text-stone-700 text-center uppercase">
          News & Updates
        </div>
        <div className="text-stone-400 text-xl py-4 text-center">
          Latest From Our Blog
        </div>
        <div className="flex flex-wrap flex-row">
          {BlogData.map((Data) => (
            <BlogCard
              type="latest"
              id={Data.id}
              title={Data.title}
              desc={Data.description}
              blogimg={Data.image}
              author={Data.Author}
              tag={Data.tag}
              date={Data.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}
