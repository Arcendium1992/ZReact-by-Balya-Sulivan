import foto from "./me.jpg";
import "./stylish.css";
import React from 'react';
import RiwayatPendidikan from "./RiwayatPendidikan";
import RiwayatPekerjaan from "./RiwayatPekerjaan";
function Profile() {
  return <img src={foto.src} alt="ivgb" className="untane" />
}

export default function Gallery() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3xl">Muhammad Balya Sulivan</h1>
        <Profile />
        <p>
          Saya adalah mahasiswa universitas masoem angkatan 2022, dengan NIM 222505050.
          Keahlian saya dibidang desain grafis, bisa dengan kodingan atau langsung 
          layout dari aplikasi editing nya.
        </p>
        <div>
          <div className="container mx-auto p-2 text-center pt-20">
            <h1 className="">Riwayat Pendidikan</h1>
            <RiwayatPendidikan level="TK" namasekolah= "TK Amalia B" year= '2005 - 2009'/>
            <RiwayatPendidikan level="SD" namasekolah= "SD Asy-Syifa" year= '2009 - 2015'/>
            <RiwayatPendidikan level="SMP" namasekolah= "Genrus Nusantara Boarding School" year= '2015 - 2017'/>
            <RiwayatPendidikan level="SMK" namasekolah= "SMK Negeri 6 Bandung" year= '2017 - 2022'/>
          </div>
          <div className="container mx-auto p-2 text-center pt-20">
            <h1 className="">Riwayat Pekerjaan</h1>
            <RiwayatPekerjaan year="2012 - 2014" instansi= "Freelance" as= 'KOnsultasi Web Dev'/>
            <RiwayatPekerjaan year="2014 - 2015" instansi= "CV Sasana Karya" as= 'Drafter'/>
            <RiwayatPekerjaan year="2020 - 2024" instansi= "PT Agmatic Farm" as= 'Owner'/>
          </div>
      </div>
    </div>
    </section>
  );
}



