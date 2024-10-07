import foto from "./me.jpg";
import "./stylish.css";
import React from 'react';
import EducationHistory from './EducationHistory';

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
      <EducationHistory />
      </div>
    </div>
    </section>
  );
}