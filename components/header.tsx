import Image from "next/image";
import Asterisk from "@/components/icons/asterisk";
import Header from "@/components/menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 h-[100px] w-full flex items-center justify-between px-5 py-10 text-[#292929] z-50">
      <div className="w-1/3 flex items-center gap-3">
        <Asterisk />
        <div className="text-[10px] lg:text-sm font-normal">
          <p>Open for any</p>
          <p className="-mt-1">collaborations and offers</p>
        </div>
      </div>
      <div className="w-1/3 hidden md:block" />
      <div className="flex items-center gap-5 pr-10">
        <Link href="/">
          <h1 className="lg:text-base text-xl font-normal ">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0px_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              HOME
            </span>
          </h1>
        </Link>
        <Link href="/works">
          <h1 className="lg:text-base text-xl font-normal ">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0px_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              WORKS
            </span>
          </h1>
        </Link>
        <Link href="https://blog.monyvann.me" target="_blank">
          <h1 className="lg:text-base text-xl font-normal ">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0px_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              BLOGS
            </span>
          </h1>
        </Link>
        <Link href="/about">
          <h1 className="lg:text-base text-xl font-normal ">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0px_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              ABOUT
            </span>
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="lg:text-base text-xl font-normal ">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0px_1px] hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              CONTACT
            </span>
          </h1>
        </Link>
      </div>
      {/* <div className="relative">
        <Header />
      </div> */}
    </div>
  );
};

export default Navbar;
