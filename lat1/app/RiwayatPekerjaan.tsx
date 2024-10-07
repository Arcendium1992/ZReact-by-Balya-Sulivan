import React from 'react';
import './stylish.css'

interface Job {
    year: string;
    instansi: string;
    as: string;
  }
  function RiwayatPekerjaan(props: Job) {
    return (
      <div className="education-container">
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 ny-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
              <h3 className="col-span-12 md:col-span-4">{props.year}</h3>
              <p className="col-span-12 md:col-span-4">{props.instansi}</p>
              <p className="col-span-12 md:col-span-4">{props.as}</p>
            </div>
        </div>
        </div>
        </div>
    );
  };

  export default RiwayatPekerjaan;