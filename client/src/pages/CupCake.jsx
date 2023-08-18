import CakeDescription from "../components/CakeDescription.jsx";
import cupcake1 from "../images/cupcakes/cupcake1.jpg";
import cupcake2 from "../images/cupcakes/cupcake5.jpg";
import cupcake3 from "../images/cupcakes/cupcake3.jpg";
import cupcake4 from "../images/cupcakes/cupcake4.jpg";
import { useLanguage } from "../utils/LanguageContext.jsx";
export default function CupCake() {
    const [state, dispatch] = useLanguage()

  const description =
    "¡Descubre la magia de los Cupcakes! Nuestra creación sublime combina sabores deliciosos en un pequeño y encantador pastelito. Cada bocado es una experiencia dulce y única que te hará sonreír. Ideal para regalar o disfrutar por ti mismo. ¡Sumérgete en la experiencia de los Cupcakes hoy mismo!";
  const title = "Cupcakes";
  const flavorTituloEs = "Sabores";
  const priceEs = "Precio: $15 por la docena!";
  const saboresEs = ["Vainilla", "Chocolate", "Fresa", "Zanahoria"];
  const ingredientes = [
    'Fresas','Durasnos','Oreos','Etc...'
  ];
  const images = [cupcake1, cupcake2, cupcake3, cupcake4];
  const pageNumber =3
  const reviewEs= 'Deja tu opinion!' 
  const reviewDescriptionEs = 'Descripción de la opinión'
  const reviewRatingEs ='Calificación (1-5) 5 es el Mejor!😃' 
  const createBtnEs = 'Enviar tu Opinión'
  const ratingAvgEs ='Promedio'
  const ratingScoreEs= 'Calificación'
  const createdDateEs= ' Creado en'
  const eraseBtnEs = 'Borrar'

  //english 
  const descriptionEn =
  "Discover the magic of Cupcakes! Our sublime creation combines delicious flavors in a small and charming treat. Every bite is a sweet and unique experience that will make you smile. Perfect for gifting or enjoying by yourself. Immerse yourself in the Cupcake experience today!";
const flavorTitle = "Flavors";
const price = "Price: $15 per dozen!";
const flavors = ["Vanilla", "Chocolate", "Strawberry", "Carrot"];
const ingredients = ['Strawberries', 'Peaches', 'Oreos', 'Etc...'];
const review = 'Leave your review!';
const reviewDescription = 'Review Description';
const reviewRating = 'Rating (1-5) 5 is the Best!😃';
const createBtn = 'Submit';
const ratingAvg = 'Average';
const ratingScore = 'Rating';
const createdDate = ' Created on';
const eraseBtn = 'Delete';

  return (
    <div>
        {state.language ? (
            <div>
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
        description={description}
        title={title}
        ingredients={ingredientes}
        flavors={saboresEs}
        flavorTitle={flavorTituloEs}
        images={images}
      />
            </div>
        ): (
            <div>
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
        description={descriptionEn}
        title={title}
        ingredients={ingredients}
        flavors={flavors}
        flavorTitle={flavorTitle}
        images={images}
      />
            </div>
        )}
     
    </div>
  );
}
