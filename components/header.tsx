import Image from "next/image";
import Asterisk from "@/components/icons/asterisk";
import Header from "@/components/menu";

const Navbar = () => {
  return (
    <div className="absolute top-0 h-[100px] w-full flex items-center justify-between px-5 py-10 text-[#292929]">
      <div className="w-1/3 flex items-center gap-3">
        <Asterisk />
        <div className="text-[10px] lg:text-sm font-normal">
          <p>Open for any</p>
          <p className="-mt-1">collaborations and offers</p>
        </div>
      </div>
      <div className="w-1/3 hidden md:block">
        <a href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="w-auto h-auto"
          />
        </a>
      </div>
      <div className="relative">
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
