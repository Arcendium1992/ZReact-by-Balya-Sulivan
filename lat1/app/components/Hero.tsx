import '../stylish.css';
import foto from "../me.jpg";

export default function Hero(){
  return (
  <div className="container mx-auto p-2 text-center">
          <h1 className="text-black font-bold">CV ONLINE</h1>
          <h1 className="text-black 3xl">Muhammad Balya Sulivan</h1>
          <Profile />
          <div className="text-black">
          <p>
            Mahasiswa di Ma'soem University <br />
            Fakultas Komputer, Prodi Sistem Informasi Semester 5 <br />
            Sedang Belajar ReactJS bersama Dosen pak Iin
          </p>
          </div>
  </div>
  );
}

function Profile() {
    return <img src={foto.src} className="untane" alt="Sponsbob" />
}

