function Header() {
  return (
    <>
      <div className="py-14 px-12 sm:p-12 md:p-20 grid sm:grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <LeftSide />
        </div>

        <div className="col-span-1">
          <RightSide />
        </div>
      </div>
    </>
  );
}

const LeftSide = () => (
  <div className="py-5 lg:py-0 md:py-0  flex flex-col">
    <h1 className="text-xl tracking-tight">
      <a
        className="font-[500] text-[20px]"
        aria-label="Blog Logo"
        href="/"
      >
        Site Name
      </a>
    </h1>
  </div>
);

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const RightSide = () => (
  <div className="flex flex-col tracking-tight">
    <ul className="flex flex-row justify-start md:justify-end lg:justify-end gap-5 md:gap-6 lg:gap-7 items-center">
      {links?.map((item, index) => (
        <li key={index}>
          <a className="hover:font-bold font-[500] text-[20px]" href={item[1]}>
            <span>{item[0]}</span>
          </a>
        </li>
      ))}

      <li>
        <button className="text-white bg-black hover:bg-gray-600  hover:text-white">
          Button
        </button>
      </li>
    </ul>
  </div>
);

export default Header;
