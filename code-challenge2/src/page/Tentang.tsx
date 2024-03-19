// import React from 'react'

import IndexNavbar from '../components/Navbars/IndexNavbar';
import Footer from '../components/Footers/Footer';
import IconTentang from "@/assets/img/tentang.jpg";

export default function Tentang() {
  return (
    <>
    <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px" id="beranda">
        <div className="container mx-auto items-center flex flex-wrap" >
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Tentang Kami
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Sofia Studio, sebagai ahli dalam pembuatan website, menawarkan layanan berkualitas tinggi yang dirancang untuk memenuhi kebutuhan unik setiap klien. Dengan fokus pada desain yang menarik dan fungsionalitas yang optimal, kami berkomitmen untuk menghadirkan pengalaman digital yang memukau dan efektif bagi setiap pengguna. Dengan tim ahli kami yang terdiri dari desainer kreatif dan pengembang berpengalaman, kami siap membantu Anda mewujudkan visi dan tujuan bisnis Anda melalui solusi web yang inovatif dan terdepan.
              </p>
              <div className="mt-12">
              </div>
            </div>
          </div>
        </div>

        <img
        className="absolute top-0 b-auto right-0  pt-20 sm:w-6/12  sm:mt-0 w-10/12"
        src={IconTentang}
        alt="..."
        style={{ width: "500px", height: "auto", marginRight: "50px", marginTop:"100px" }}
        />
      </section>
      <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <div className="flex justify-center">
      <div className="max-w-[700px] text-center">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Budaya Kami
        </h2>
        <p className="mb-16 text-neutral-500 dark:text-neutral-300">
          Budaya ini sudah turun temurun dari dulu waktu berdirinya perusahaan ini
        </p>
      </div>
    </div>

    <div className="gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 flex">
      <div className="mb-12 lg:mb-0">
        <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0-144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-8.8 7.2-16 16-16z"/></svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Jujur</h5>
        <p className="text-neutral-500 dark:text-neutral-300">
        Di Sofia Studio, jujur dalam bekerja bukan hanya menjadi nilai, melainkan juga menjadi pondasi yang kokoh yang membentuk karakter dan budaya kerja kami.
        </p>
      </div>

      <div className="mb-12 lg:mb-0">
        <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Kekeluargaan</h5>
        <p className="text-neutral-500 dark:text-neutral-300">
        Di sinilah kami bukan hanya sekadar rekan kerja, tetapi juga menjadi bagian dari satu keluarga yang saling mendukung
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Semangat</h5>
        <p className="text-neutral-500 dark:text-neutral-300">
        Di sini, kami berbagi tekad yang tak tergoyahkan untuk menghadirkan inovasi yang menginspirasi
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Integritas</h5>
        <p className="text-neutral-500 dark:text-neutral-300">
        Kami meyakini bahwa integritas adalah prinsip yang tidak dapat ditawar-tawar dalam setiap langkah yang kami ambil
        </p>
      </div>
    </div>
  </section>
</div>
<br></br>
      <Footer />
    </>
  )
}
