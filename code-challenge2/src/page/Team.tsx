import {useEffect, useState} from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar';
import Footer from '../components/Footers/Footer';
import { IMember } from '../types/interface/IMember.interface';
import IconTeam from "@/assets/img/tim.jpg";

export default function Team() {
    const [teamMembers, setTeamMembers] = useState([]);
    
    
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => {
        // Ambil data orang dari hasil respons
        const { results } = data;

        setTeamMembers(results);
      })
      .catch(error => console.error('Error fetching team members:', error));
  }, []);

  return (
    <>
    <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px" id="beranda">
        <div className="container mx-auto items-center flex flex-wrap" >
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Tim Kami
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Tim yang berada di Sofia Studio adalah kumpulan individu-individu yang sangat handal dan berpengalaman dalam bidangnya masing-masing, membentuk sebuah kolektif yang tangguh dan penuh dengan kreativitas serta inovasi yang membawa perusahaan ke tingkat yang lebih tinggi
              </p>
              <div className="mt-12">
              </div>
            </div>
          </div>
        </div>

        <img
        className="absolute top-0 b-auto right-0  pt-20 sm:w-6/12  sm:mt-0 w-10/12"
        src={IconTeam}
        alt="..."
        style={{ width: "500px", height: "auto", marginRight: "50px", marginTop:"100px" }}
        />
      </section>
      <br></br>
      <div className="lg:gap-xl-12 gap-x-6 md:grid-cols-3 xl:grid-cols-4 flex justify-center" style={{ gap: "300px", alignItems: 'center', textAlign: 'center' }}>
        {teamMembers.map((member: IMember, index: number) => (
          <div key={index} className="mb-12">
            <img src={member.picture.large} className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt={member.name.first} style={{ maxWidth: "200px" }} />
            <p className="mb-2 font-bold">{member.name.first} {member.name.last}</p>
            <p className="text-neutral-500 dark:text-neutral-300">{member.email}</p>
            <p className="text-neutral-500 dark:text-neutral-300">{member.phone}</p>
            <p className="text-neutral-500 dark:text-neutral-300">{member.location.city}, {member.location.country}</p>
            <p className="text-neutral-500 dark:text-neutral-300">Gender: {member.gender}</p>
            <p className="text-neutral-500 dark:text-neutral-300">Age: {member.dob.age}</p>
          </div>
        ))}
      </div>
        <br></br>
      <Footer />
    </>
  )
}
