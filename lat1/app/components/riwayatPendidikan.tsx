import '../stylish.css';

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
function BarisRiwayat(props: RowRiwayatProps) {
  return (
<div className="border-2 border-yellow-500 rounded-lg bg-white shadow-lg shadow-yellow-300 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="text-black font-semibold col-span-12 md:col-span-4 text-center">
            {props.jenjang}
          </div>
          <div className="text-black col-span-12 md:col-span-4 text-center">
            {props.sekolah}
          </div>
          <div className="text-black text-gray-500 col-span-12 md:col-span-4 text-center">
            {props.tahun}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPendidikan(){
    return (
        <div>
        <h1 className="font-bold judul mt-10 mb-10">Riwayat Pendidikan</h1>
        <BarisRiwayat jenjang="TK" sekolah="TK Amalia B" tahun="2009 - 2010" />
        <BarisRiwayat jenjang="SD" sekolah="SD Asy-Syifa 1" tahun="2010 - 2016" />
        <BarisRiwayat jenjang="SMP" sekolah="SMP Genrus Nusantara Boarding School" tahun="2016 - 2019" />
        <BarisRiwayat jenjang="SMA" sekolah="SMAN 6 Bandung" tahun="2019 - 2022" />
        <BarisRiwayat jenjang="Kuliah" sekolah="Universitas Masoem" tahun="2022 - Sekarang" />
        </div>
    );
}