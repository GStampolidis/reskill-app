import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        key={data.id}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20"
      >
        <div className="flex flex-col col-span-1 gap-6 pr-4 tracking-tight">
          <h1 className="font-[700] text-[64px] text-black  text-left tracking-tight capitalize ">
            {data.title}
          </h1>
          <h3 className="font-[400] text-[24px] text-[#828282]  text-left">
            <p>{data.body}</p>
          </h3>
          <h2 className="font-[500] text-[20px]  text-left ">
            <p className="text-left text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isnt anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc
            </p>
          </h2>
        </div>
        <div className="flex col-span-1 lg:col-span-1 justify-end pl-0 md:pl-16 lg:pl-28 pr-1 ">
          <img
            src={"https://placehold.co/400"} // data.photo.url
            alt="Photo"
            className="rounded-lg h-auto w-full object-cover" // or lg:w-[500px] lg:h-[700px]
          />
        </div>
      </div>
    </>
  );
}

export default SinglePost;
