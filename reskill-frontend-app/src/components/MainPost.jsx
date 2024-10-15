import foodies from "../assets/images/foodies.png";
// import flowers from "../assets/images/flowers.png";
// import sheeps from "../assets/images/sheeps.png";

function IntroPost() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-10  px-20 pb-20 pt-10">
          <div>
            <h1 className="font-bold text-black text-[64px] tracking-tight">
              Posts List
            </h1>
            <br />
            <h4 className="text-[#828282] text-[24px] font-[400] tracking-tight">
              Subheading that sets up context, shares more info about the <br />
              author, or generally gets people psyched to keep reading
            </h4>
            <img
              className="flex justify-center pt-10 rounded-md md:w-[1280px] md:h-[650] lg:w-[1900px] lg:h-[850px]"
              src={foodies}
            ></img>
          </div>
          <BodyTextUp />
          <BodyImages />
          <BodyTextDown />
        </div>
      </div>
    </>
  );
}

const BodyTextUp = () => (
  <div className="flex flex-col gap-6 lg:px-52 md:px-32  text-black text-l text-[20px] font-[500] tracking-tight ">
    <p>
      Body text for your whole article or post. We’ll put in some lorem ipsum to
      show how a filled-out page might look:
    </p>
    <p>
      Excepteur efficient emerging, minim veniam anim aute carefully curated
      Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui
      international first-class nulla ut. Punctual adipisicing, essential lovely
      queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
      impeccable aute quality of life soft power pariatur Melbourne occaecat
      discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable
      officia Helsinki excepteur Basset hound. Zürich sleepy perfect
      consectetur.
    </p>
    <p>
      Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa
      esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud
      delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt
      intricate airport handsome K-pop excepteur classic esse Asia-Pacific
      laboris.
    </p>
  </div>
);
const BodyImages = () => (
  <div className="flex justify-center">
    <div className="flex flex-col md:flex-row w-full gap-2">
      <div className="flex-1 aspect-[5/4]">
        <img
          alt="flowers"
          className="rounded-lg h-3/4 w-full object-cover"
          src={"https://placehold.co/400"} // flowers img imported on top but wont fit correctly due to size
          loading="lazy"
        ></img>
      </div>
      <div className="flex-1 aspect-[5/4]">
        <img
          alt="sheeps"
          className="rounded-lg h-3/4 w-full object-cover"
          src={"https://placehold.co/400"} // sheeps
          loading="lazy"
        ></img>
      </div>
    </div>
  </div>
);
const BodyTextDown = () => (
  <div className="flex flex-col gap-6 lg:py-20 lg:px-52 md:px-32 text-black text-[20px] font-[500] tracking-tight">
    <p>
      Excepteur efficient emerging, minim veniam anim cloying aute carefully
      curated gauche. Espresso exquisite perfect nostrud nisi intricate.
      Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
      Exclusive izakaya charming Quezon City impeccable aute quality of life
      soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus
      rock opera.
    </p>
    <p>
      Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux
      cupidatat id minim. Sharp classic the best commodo nostrud delightful.
      Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport
      excepteur classic esse riot girl.
    </p>
  </div>
);

export default IntroPost;
