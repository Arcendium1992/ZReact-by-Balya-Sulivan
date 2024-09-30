import foto from "./unta.jpg";
import "./stylish.css";

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
          ieuwicilruweirslshdweifwedbfnroeifwofjwefojwd
          wefwefwegrgneroigher
          wrgjeroigerjgoirejgorejgoerjgioerhgegslhgerger
          gerhgeropgherhiger
          erguhrego;ehrsg;hregiurehg
        </p>
      </div>
    </section>
  );
}