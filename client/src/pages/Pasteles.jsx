import CakeDescription from "../components/CakeDescription.jsx";
import pastel1 from "../images/pasteles/pastel1.jpg";
import pastel2 from "../images/pasteles/pastel2.jpg";
import pastel3 from "../images/pasteles/pastel3.jpg";
import pastel4 from "../images/pasteles/pastel4.jpg";
import pastel5 from "../images/pasteles/pastel5.jpg";
import pastel6 from "../images/pasteles/pastel6.jpg";
import pastel7 from "../images/pasteles/pastel7.jpg";
import pastel8 from "../images/pasteles/pastel8.jpg";

export default function Pasteles() {
  const description =
    "¡Descubre la variedad de nuestros Pasteles! Cada pastel es una obra maestra única, con sabores exquisitos y una presentación encantadora. Desde pasteles clásicos hasta creaciones innovadoras, tenemos el pastel perfecto para cualquier celebración. ¡Sumérgete en la experiencia de los Pasteles hoy mismo!";
  const title = "Pasteles";
  const flavorTitulo = "Sabores";
  const price = "$30-100, y más!";
  const sabores = ["Vainilla", "Chocolate", "Fresa", "Cafe", 'Mocha'];
  const ingredientes = [
    'Fresas', 'Durasnos', 'Piña','Cocó', 'Oreo','Nutella','Etc...'
  ];
  const images = [
    pastel1,
    pastel2,
    pastel3,
    pastel4,
    pastel5,
    pastel6,
    pastel7,
    pastel8,
  ];

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
