import Asterisk from "@/components/icons/asterisk";
import Header from "@/components/menu";

const Navbar = () => {
  return (
    <div className="absolute top-0 h-[100px] w-full flex items-center justify-between px-5 py-10 text-[#292929]">
      <div className="w-full flex items-center gap-3">
        <Asterisk />
        <div className="md:text-[9px] lg:text-sm font-normal">
          <p>Open for any</p>
          <p className="-mt-1">collaborations and offers</p>
        </div>
      </div>
      <div className="w-full">
        <a href="/" className="md:text-2xl lg:text-4xl font-bold">
          ZEN様
        </a>
      </div>
      <div className="relative">
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
