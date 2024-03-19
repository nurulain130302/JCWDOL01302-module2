// import React from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar';
import Footer from '../components/Footers/Footer';
import IconLayanan from "@/assets/img/layanan.jpg";

export default function Layanan() {
  return (
    <>
    <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px" id="beranda">
        <div className="container mx-auto items-center flex flex-wrap" >
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Layanan
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Sofia Studio, sebagai ahli dalam pembuatan website, menawarkan layanan berkualitas tinggi yang dirancang untuk memenuhi kebutuhan unik setiap klien. Dengan fokus pada desain yang menarik dan fungsionalitas yang optimal, kami berkomitmen untuk menghadirkan pengalaman digital yang memukau dan efektif bagi setiap pengguna. Dengan tim ahli kami yang terdiri dari desainer kreatif dan pengembang berpengalaman, kami siap membantu Anda mewujudkan visi dan tujuan bisnis Anda melalui solusi web yang inovatif dan terdepan
              </p>
              <div className="mt-12">
              </div>
            </div>
          </div>
        </div>

        <img
        className="absolute top-0 b-auto right-0  pt-20 sm:w-6/12  sm:mt-0 w-10/12"
        src={IconLayanan}
        alt="..."
        style={{ width: "500px", height: "auto", marginRight: "50px", marginTop:"100px" }}
        />
      </section>
      <div className="lg:gap-xl-12 gap-x-6 md:grid-cols-3 xl:grid-cols-4 flex" style={{textAlign: 'center', marginRight: "200px"}}>
            <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                    Web Development
                </h6>
                <p className="mb-4 text-blueGray-500">
                    HTML/CSS, Wordpress, Javascript, Responsive Website, Dll
                </p>
            </div>

            <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                        Mobile Development
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                        Flutter, Kotlin, React Native, Ionic, Xamarin
                    </p>
                </div>
            </div>
        </div>


        <div className="lg:gap-xl-12 gap-x-6 md:grid-cols-3 xl:grid-cols-4 flex" style={{textAlign: 'center', marginRight: "200px"}}>
            <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z"/></svg>
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                    Editing
                </h6>
                <p className="mb-4 text-blueGray-500">
                Editing Video, Animation, Opening 
                      Logo , Motion Graphic
                </p>
            </div>

            <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                        Design
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                        Poster, Card, Social Media, Landing Page
                    </p>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

    <div className="flex justify-center gap-6">
      <div className="w-full sm:w-auto mb-12 sm:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            className="w-24 h-24 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg font-bold">Maria Hoodie</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Web Developer
        </h6>
        <ul className="mb-0 flex justify-center">
        <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                </svg>
              </li>
        </ul>
        <br></br>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
          id officiis hic tenetur quae quaerat ad velit ab hic.
        </p>
      </div>
      <div className="w-full sm:w-auto mb-12 sm:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
            className="w-24 h-24 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg font-bold">Lisa Corduroy</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Graphic Designer
        </h6>
        <ul className="mb-0 flex justify-center">
        <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                </svg>
              </li>
        </ul>
        <br></br>
        <p className="mb-4">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid commodi.
        </p>
        <ul className="mb-0 flex justify-center">
         
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
            className="w-24 h-24 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg font-bold">Sol Chinos</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Marketing Specialist
        </h6>
        <ul className="mb-0 flex justify-center">
        <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="currentColor"
                    d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                </svg>
              </li>
        </ul>
        <br></br>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
        <ul className="mb-0 flex justify-center">
          
        </ul>
      </div>
    </div>
  </section>
</div>
<br></br>
      <Footer />
    </>
  )
}
