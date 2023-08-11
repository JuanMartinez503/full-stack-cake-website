import React from "react";
import CakeDescription from "../components/CakeDescription.jsx";
import cupcake1 from "../images/cupcakes/cupcake1.jpg";
import cupcake2 from "../images/cupcakes/cupcake5.jpg";
import cupcake3 from "../images/cupcakes/cupcake3.jpg";
import cupcake4 from "../images/cupcakes/cupcake4.jpg";

export default function CupCake() {
  const description =
    "¡Descubre la magia de los Cupcakes! Nuestra creación sublime combina sabores deliciosos en un pequeño y encantador pastelito. Cada bocado es una experiencia dulce y única que te hará sonreír. Ideal para regalar o disfrutar por ti mismo. ¡Sumérgete en la experiencia de los Cupcakes hoy mismo!";
  const title = "Cupcakes";
  const flavorTitulo = "Sabores";
  const price = "$15 por la docena!";
  const sabores = ["Vainilla", "Chocolate", "Fresa", "Zanahoria"];
  const ingredientes = [
    'Fresas','Durasnos','Oreos','Etc...'
  ];
  const images = [cupcake1, cupcake2, cupcake3, cupcake4];

  return (
    <div>
      <CakeDescription
        price={price}
        description={description}
        title={title}
        ingredients={ingredientes}
        flavors={sabores}
        flavorTitle={flavorTitulo}
        images={images}
      />
    </div>
  );
}
