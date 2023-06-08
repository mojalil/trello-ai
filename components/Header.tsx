import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex flex-col">
    <header>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg"
        alt="Trello AI Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div>
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input type="text" placeholder="Search" className="flex-1 outline-none p-2"></input>
          <button type="submit" hidden>Search</button>
        </form>
      </div>
    </header>
    </div>
  );
};

export default Header;
