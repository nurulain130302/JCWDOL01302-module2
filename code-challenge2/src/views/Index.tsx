/*eslint-disable*/
// import React from "react";
// import { Link } from "react-router-dom";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";
import ImageLanding from "@/assets/img/landing.png";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        id="beranda"
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <p className="font-bold text-lightBlue-500 text-4xl">
                Selamat Datang di Sofia Studio
              </p>
              <br></br>
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Mari bangun bisnis Anda menjadi lebih baik bersama kami
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Tim ini berada di lingkungan yang sangat baik. Anda dapat
                melihat profil mereka secara detail. mereka adalah orang-orang
                profesional di bidangnya, tidak diragukan lagi.
              </p>
              <div className="mt-12">
                <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 cursor-pointer">
                  Mulai
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 mr-28 pt-20 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
          src={ImageLanding}
          alt="..."
          style={{ width: "500px", height: "auto", marginRight: "50px" }}
        />
      </section>

      {/* <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section> */}
      <br></br>
      <Footer />
    </>
  );
}
