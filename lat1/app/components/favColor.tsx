"use client"

import { useState } from "react";

export default function FavColor() {
    const [warna, setWarna] = useState("Merah");
    const [bgw, setBg] = useState("white");
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className={`bg-${bgw}`}>Warna Favorit Saya Adalah {warna}</h1>
            <hr className="m-10"/>
            <p className="text-black">Ubah warna:</p>
            <button
                className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"
                    onClick={() => {setWarna("Hitam"); setBg("black")}}>
                Hitam
                </button>
            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {setWarna("Kuning"); setBg("yellow-500")}}>
                Kuning
                </button>  
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {setWarna("Biru"); setBg("blue-500")}}>
                Biru
                </button> 
            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {setWarna("Abu-Abu"); setBg("gray-500")}}>
                Abu-Abu
                </button> 
            <button
                className="bg-red-700 hover:bg-white-700 text-black font-bold py-2 px-4 rounded"
                    onClick={() => {setWarna("Merah"); setBg("red-700")}}>
                Merah
                </button> 
        </div>
    );
}