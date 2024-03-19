/*eslint-disable*/
import React from "react";
// import { Link } from "react-router-dom";
// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <a href="/">Sofia Studio</a>
            </p>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                href="/"
                className="text-blueGray-700 text-sm font-bold inline-block mr-4 py-2 whitespace-nowrap cursor-pointer hover:text-blue-500"
              >
                Beranda
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="/tentang"
                className="text-blueGray-700 text-sm font-bold inline-block mr-4 py-2 whitespace-nowrap cursor-pointer hover:text-blue-500"
              >
                Tentang Kami
              </a>
            </li>

            <li className="flex items-center">
              <a
                href="/layanan"
                className="text-blueGray-700 text-sm font-bold inline-block mr-4 py-2 whitespace-nowrap cursor-pointer hover:text-blue-500"
              >
                Layanan
              </a>
            </li>

            <li className="flex items-center">
              <a
                href="/team"
                className="text-blueGray-700 text-sm font-bold inline-block mr-4 py-2 whitespace-nowrap cursor-pointer hover:text-blue-500"
              >
                Tim
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
