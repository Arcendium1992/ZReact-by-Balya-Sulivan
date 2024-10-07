import React from 'react';
interface Education {
  level: string;
  schoolName: string;
  year: string;
}
const educationData: Education[] = [
  { level: 'TK', schoolName: 'TK Amalia B', year: '2005 - 2011' },
  { level: 'SD', schoolName: 'SD Asy-Syifa', year: '2017 - 2021' },
  { level: 'SMP', schoolName: 'Genrus Nusantara Boarding School', year: '2011 - 2014' },
  { level: 'SMK', schoolName: 'SMK Negeri 6 Bandung', year: '2014 - 2017' },
];
const EducationHistory: React.FC = () => {
  return (
    <div className="education-container">
      <h2 className="title">Riwayat Pendidikan</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="level">{edu.level}</h3>
            <p className="school-name">{edu.schoolName}</p>
            <p className="year">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EducationHistory;
