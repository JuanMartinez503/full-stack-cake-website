import CakeDescription from '../components/CakeDescription.jsx';
import chocoflan1 from '../images/chocoflan/flan1.jpg';
import chocoflan2 from '../images/chocoflan/flan2.jpg';
import chocoflan3 from '../images/chocoflan/flan3.jpg';
import { useLanguage } from '../utils/LanguageContext.jsx';
export default function Chocoflan() {
    const [state, dispatch] = useLanguage()

  const descriptionEs =
    'Descubre la delicia del Chocoflan, una mezcla perfecta entre pastel de chocolate y flan suave. Cada cucharada es un encuentro mágico de sabores y texturas que te cautivarán. Ideal para satisfacer tus antojos dulces en cualquier ocasión. ¡Sumérgete en la experiencia del Chocoflan hoy mismo!';
  const title = 'Chocoflan';
  const flavorTituloEs = 'Sabores';
  const ingredientesTituloEs = 'Ingredientes';
  const sabores = ['Chocolate', 'Caramelo','Cafe','Mocha','Fresa'];
  const ingredientesEs = ['Fresas','Durasnos','Uvas','Cocó','Oreos','Etc...'];
  const images = [chocoflan1, chocoflan2, chocoflan3];
  const priceEs = ' Precio: $40'
    const pageNumber = 2
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
  'Discover the delight of Chocoflan, a perfect blend of chocolate cake and smooth flan. Every spoonful is a magical encounter of flavors and textures that will captivate you. Ideal for satisfying your sweet cravings on any occasion. Immerse yourself in the Chocoflan experience today!';
const flavorTitle = 'Flavors';
const ingredientTitle = 'Ingredients';
const flavors = ['Chocolate', 'Caramel', 'Coffee', 'Mocha', 'Strawberry'];
const ingredients = ['Strawberries', 'Peaches', 'Grapes', 'Coconut', 'Oreos', 'Etc...'];
const price = ' Price: $40';
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
        {state.language ? (<div>
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
        ingredients={ingredientesEs}
        flavors={sabores}
        flavorTitle={flavorTituloEs}
        ingredientsTitle={ingredientesTituloEs}
        images={images}
      />
        </div>):(
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
        description={description}
        title={title}
        ingredients={ingredients}
        flavors={flavors}
        flavorTitle={flavorTitle}
        ingredientsTitle={ingredientTitle}
        images={images}
      />
            </div>
        )}
  
    </div>
  );
}
