import '../stylish.css';
interface RowRiwayatKerjaProps {
    tahun_kerja: string;
    instansi: string;
    bekerja_sebagai: string;
  }
function BarisRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-yellow-500 rounded-lg bg-white shadow-lg shadow-yellow-300 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="text-black font-semibold col-span-12 md:col-span-4 text-center">
            {props.tahun_kerja}
          </div>
          <div className="text-black col-span-12 md:col-span-4 text-center">
            {props.instansi}
          </div>
          <div className="text-black col-span-12 md:col-span-4 text-center">
            {props.bekerja_sebagai}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function RiwayatKerja(){
    return (
        <div>
            <h1 className="text-black font-bold judul mt-10 mb-10 ">Riwayat Pekerjaan</h1>
        <BarisRiwayatKerja tahun_kerja="2003 - 2010" instansi="Rumah Sakit Hasan Sadikin" bekerja_sebagai="Dokter Spesialis Mobile Legend" />
        <BarisRiwayatKerja tahun_kerja="2010 - 2012" instansi="Polda Jabar" bekerja_sebagai="Direktur" />
        <BarisRiwayatKerja tahun_kerja="2013 - 2019" instansi="Masoem University" bekerja_sebagai="Dosen Bahasa Bulan" />
        <BarisRiwayatKerja tahun_kerja="2019 - Sekarang" instansi="N.A.S.A" bekerja_sebagai="Astronot Matahari" />
        </div>
    );
}