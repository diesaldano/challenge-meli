import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo_ML@2x.png"
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = React.useState('');

  function onSubmithandle (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/items?search=${value}`);
  }
  
  return (
    <div className="navbar navbar-light bg-light w-100">
      <nav className="z-0 relative shadow bg-yellow-300	w-100 wrap padding">
        <div className="grid grid-cols-12 w-100 flex items-center h-16">
          <div className="w-full col-span-3 md:col-span-1 flex justify-center items-center">
            <a className="flex justify-center items-center" href="/">
              <Image alt="Picture of the author" src={Logo}
                width={50} height={31} className="flex items-center mt-2"
              />
            </a>
          </div>
          <div className="flex justify-start px-2 col-span-9 md:col-span-11 w-full">
            <div className="w-100 w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <form method="get" onSubmit={onSubmithandle} className="relative z-50">
                <button type="submit" id="searchsubmit" onClick={() => onSubmithandle} className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" name="s" id="s"
                  className="block w-full pl-10 pr-3 py-1 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
