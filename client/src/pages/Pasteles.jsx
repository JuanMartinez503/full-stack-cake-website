import CakeDescription from "../components/CakeDescription.jsx";
import pastel1 from "../images/pasteles/pastel1.jpg";
import pastel2 from "../images/pasteles/pastel2.jpg";
import pastel3 from "../images/pasteles/pastel3.jpg";
import pastel4 from "../images/pasteles/pastel4.jpg";
import pastel5 from "../images/pasteles/pastel5.jpg";
import pastel6 from "../images/pasteles/pastel6.jpg";
import pastel7 from "../images/pasteles/pastel7.jpg";
import pastel8 from "../images/pasteles/pastel8.jpg";
import pastel9 from "../images/pasteles/pastel9.jpg";
import pastel10 from "../images/pasteles/pastel10.jpg";
import pastel11 from "../images/pasteles/pastel11.jpg";
import { useLanguage } from "../utils/LanguageContext.jsx";
export default function Pasteles() {
  const [state, dispatch] = useLanguage();

  const descriptionEs =
    "¡Descubre la variedad de nuestros Pasteles! Cada pastel es una obra maestra única, con sabores exquisitos y una presentación encantadora. Desde pasteles clásicos hasta creaciones innovadoras, tenemos el pastel perfecto para cualquier celebración. ¡Sumérgete en la experiencia de los Pasteles hoy mismo!";
  const titleEs = "Pasteles";
  const flavorTituloEs = "Sabores";
  const priceEs = "Precio: $30-100, y más!";
  const sabores = ["Vainilla", "Chocolate", "Fresa", "Cafe", "Mocha"];
  const ingredientes = [
    "Fresas",
    "Durasnos",
    "Piña",
    "Cocó",
    "Oreo",
    "Nutella",
    "Etc...",
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
    pastel9,
    pastel10,
    pastel11,
  ];
  const pageNumber = 4;
  const reviewEs = "Deja tu opinion!";
  const reviewDescriptionEs = "Descripción de la opinión";
  const reviewRatingEs = "Calificación (1-5) 5 es el Mejor!😃";
  const createBtnEs = "Enviar tu Opinión";
  const ratingAvgEs = "Promedio";
  const ratingScoreEs = "Calificación";
  const createdDateEs = " Creado en";
  const eraseBtnEs = "Borrar";

  //english
  const descriptionEn =
    "Discover the variety of our Cakes! Each cake is a unique masterpiece with exquisite flavors and delightful presentation. From classic cakes to innovative creations, we have the perfect cake for any celebration. Immerse yourself in the Cake experience today!";
  const titleEn = "Cakes";
  const flavorTitleEn = "Flavors";
  const price = "Price: $30-100, and more!";
  const flavors = ["Vanilla", "Chocolate", "Strawberry", "Coffee", "Mocha"];
  const ingredients = [
    "Strawberries",
    "Peaches",
    "Pineapple",
    "Coconut",
    "Oreo",
    "Nutella",
    "Etc...",
  ];
  const reviewEn = "Leave your review!";
  const reviewDescriptionEn = "Review Description";
  const reviewRatingEn = "Rating (1-5) 5 is the Best!😃";
  const createBtnEn = "Submit";
  const ratingAvgEn = "Average";
  const ratingScoreEn = "Rating";
  const createdDateEn = " Created on";
  const eraseBtnEn = "Delete";

  return (
    <div>
      {state.language ? (
        <div>
          <CakeDescription
            eraseBtn={eraseBtnEs}
            createDate={createdDateEs}
            ratingScore={ratingScoreEs}
            createBtn={createBtnEs}
            reviewDescription={reviewDescriptionEs}
            reviewName={reviewEs}
            reviewRating={reviewRatingEs}
            ratingAvg={ratingAvgEs}
            pageNumber={pageNumber}
            price={priceEs}
            description={descriptionEs}
            title={titleEs}
            ingredients={ingredientes}
            flavors={sabores}
            flavorTitle={flavorTituloEs}
            images={images}
          />
        </div>
      ) : (
        <div>
          <CakeDescription
            eraseBtn={eraseBtnEn}
            createDate={createdDateEn}
            ratingScore={ratingScoreEn}
            createBtn={createBtnEn}
            reviewDescription={reviewDescriptionEn}
            reviewName={reviewEn}
            reviewRating={reviewRatingEn}
            ratingAvg={ratingAvgEn}
            pageNumber={pageNumber}
            price={price}
            description={descriptionEn}
            title={titleEn}
            ingredients={ingredients}
            flavors={flavors}
            flavorTitle={flavorTitleEn}
            images={images}
          />
        </div>
      )}
    </div>
  );
}
