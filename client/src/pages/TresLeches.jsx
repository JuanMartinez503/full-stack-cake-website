import CakeDescription from "../components/CakeDescription.jsx";
import tres1 from "../images/tresleches/tresleches1.jpg";
import tres2 from "../images/tresleches/tresleches2.jpg";
import tres3 from "../images/tresleches/tresleches3.jpg";
import tres4 from "../images/tresleches/tresleches4.jpg";
import { useLanguage } from "../utils/LanguageContext.jsx";
export default function TresLeches() {
    const [state, dispatch] = useLanguage()
  const descriptionEs =
    "¡Descubre la magia del Pastel Tres Leches! Nuestra creación sublime combina un tierno bizcocho con una mezcla de tres leches y una capa de crema fresca. Cada bocado es una explosión de sabor y textura que te transportará a un paraíso dulce. Ideal para cualquier ocasión especial. ¡Sumérgete en la experiencia del Pastel Tres Leches hoy mismo!";
  const title = "Tres Leches";
  const flavorTituloEs = "Sabores";
  const priceEs = 'Precio: $12-40, y mas!'
  const saboresEs = ["Chocolate", "Vainilla"];
  const ingredientes = [
    "Oreo",
    "Fresas",
    "Cherries",
    "Cualquier cosa que desees",
  ];
  const images = [tres1, tres2, tres3, tres4];
  const pageNumber = 1
  const reviewEs= 'Deja tu opinion!' 
  const reviewDescriptionEs = 'Descripción de la opinión'
  const reviewRatingEs ='Calificación (1-5) 5 es el Mejor!😃' 
  const createBtnEs = 'Enviar tu Opinión'
  const ratingAvgEs ='Promedio'
  const ratingScoreEs= 'Calificación'
  const createdDateEs= ' Creado en'
  const eraseBtnEs = 'Borrar'
  //english
  const description =
  "Discover the magic of Tres Leches Cake! Our sublime creation combines a tender sponge cake with a blend of three milks and a layer of fresh cream. Every bite is an explosion of flavor and texture that will transport you to a sweet paradise. Perfect for any special occasion. Immerse yourself in the Tres Leches Cake experience today!";
const flavorTitle = "Flavors";
const price = 'Price: $12-40, and more!';
const flavors = ["Chocolate", "Vanilla"];
const ingredients = [
  "Oreo",
  "Strawberries",
  "Cherries",
  "Anything you desire",
];
const review = 'Leave your review!';
const reviewDescription = 'Review Description';
const reviewRating = 'Rating (1-5) 5 is the Best!😃';
const createBtn = 'Submit your Review';
const ratingAvg = 'Average';
const ratingScore = 'Rating';
const createdDate = ' Created on';
const eraseBtn = 'Delete';

  return (
    <div>
        {state.language ?( <div>
            <CakeDescription
              eraseBtn={eraseBtnEs}
              createDate={createdDateEs}
              ratingScore={ratingScoreEs}
              createBtn= {createBtnEs}
              reviewDescription={reviewDescriptionEs}
              reviewName={reviewEs}
              reviewRating={reviewRatingEs}
              ratingAvg={ratingAvgEs}
        pageNumber={pageNumber}
        price={priceEs}
        description={descriptionEs}
        title={title}
        ingredients={ingredientes}
        flavors={saboresEs}
        flavorTitle={flavorTituloEs}
        images={images}
      />
        </div>):(<div>
            <CakeDescription
              eraseBtn={eraseBtn}
              createDate={createdDate}
              ratingScore={ratingScore}
              createBtn= {createBtn}
              reviewDescription={reviewDescription}
              reviewName={review}
              reviewRating={reviewRating}
              ratingAvg={ratingAvg}
        pageNumber={pageNumber}
        price={price}
        description={description}
        title={title}
        ingredients={ingredients}
        flavors={flavors}
        flavorTitle={flavorTitle}
        images={images}
      />
        </div>)}
 
    </div>
  );
}
