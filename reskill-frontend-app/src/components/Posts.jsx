import { Link } from "react-router-dom";

function Posts({ posts }) {
  return (
    <>
      <div className="flex flex-col gap-8 p-20">
        <h1 className="text-black font-[600] text-[40px] ">
          Related articles or posts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {posts.map((item) => (
            <div key={item.id} className="flex flex-col pb-24">
              <Link
                className="flex flex-col hover:scale-105 transition-transform "
                to={`/posts/${item.id}`}
              >
                <img
                  className=" aspect-square rounded-lg "
                  src={"https://placehold.co/400"} // item.url but the placeholder site doesnt work.
                  alt={item.title}
                />
                <div className="flex flex-col justify-between flex-grow pt-6 h-full">
                  <h3 className="text-black font-[500] text-[20px] line-clamp-1 hover:line-clamp-none capitalize">
                    {item.title}
                  </h3>
                  <h4 className="font-[500] text-[20px] text-[#828282]">
                    AuthorUserId: {item.userId} 
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
