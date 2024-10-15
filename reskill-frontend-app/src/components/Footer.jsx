import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

function FooterC() {
  return (
    <>
      <div className="px-20 pb-10 ">
        <hr />
        <div className="pt-12 grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <LeftSide />
          </div>
          <div className="col-span-1">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}

const buttonStyle = { color: "gray", width: "26px" };
const buttons = [
  {
    href: "https://www.facebook.com/",
    icon: <BsFacebook size={20} style={buttonStyle} />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin size={21} style={buttonStyle} />,
  },

  {
    href: "https://www.youtube.com/",
    icon: <FaYoutube size={21} style={buttonStyle} />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram size={21} style={buttonStyle} />,
  },
];

const LeftSide = () => (
  <div className="flex flex-col items-start gap-20 ">
    <div>
      <h1 className=" inline-block tracking-tight text-[24px] text-slate-900 dark:text-slate-200">
        <a className="text-black inline-block" aria-label="Blog Logo" href="/">
          Site Name
        </a>
      </h1>
    </div>
    <div
      className="flex flex-row  gap-4  items-center
        "
    >
      {buttons?.map((item, index) => (
        <a
          className={"hover:scale-125 delay-75 font-bold cursor-pointer"}
          href={item.href}
          key={index}
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
);

const pages = [
  ["Page", "Page", "Page"],
  ["Page", "Page", "Page"],
  ["Page", "Page", "Page"]
];

const RightSide = () => (
  <div className="flex flex-row items-start  justify-between tracking-tight">
    {pages?.map((item, index) => (
      <div className="flex flex-col items-start gap-3 md:pr-16 lg:pr-20" key={index}>
        <span className="text-black font-[500] text-[16px]">Topic</span>

        <a className="hover:font-bold text-[#454545]" href="/">
          <span>{item[0]}</span>
        </a>
        <a className="hover:font-bold text-[#454545]" href="/">
          <span>{item[1]}</span>
        </a>
        <a className="hover:font-bold text-[#454545]" href="/">
          <span>{item[2]}</span>
        </a>
      </div>
    ))}
  </div>
);

export default FooterC;
