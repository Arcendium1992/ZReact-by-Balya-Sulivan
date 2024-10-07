import React from 'react';
import './stylish.css'

interface Education {
  level: string;
  namasekolah: string;
  year: string;
}
function RiwayatPendidikan(props: Education) {
  return (
    <div className="education-container">
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 ny-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4">{props.level}</h3>
            <p className="col-span-12 md:col-span-4">{props.namasekolah}</p>
            <p className="col-span-12 md:col-span-4">{props.year}</p>
          </div>
      </div>
      </div>
      </div>
  );
};

export default RiwayatPendidikan;