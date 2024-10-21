
import React from 'react';
import Hero from './components/Hero';
import RiwayatKerja from './components/riwayatKerja';
import RiwayatPendidikan from './components/riwayatPendidikan';
import FavColor from './components/favColor';
import Form from './components/quiz';
export default function MyIam() {
  return (
    <section className="bg">
      <Hero/>
      <RiwayatKerja/>
      <RiwayatPendidikan/>
      <FavColor/>
      <Form/>
    </section>
  );
}
