import CakeDescription from '../components/CakeDescription.jsx';
import chocoflan1 from '../images/chocoflan/flan1.jpg';
import chocoflan2 from '../images/chocoflan/flan2.jpg';
import chocoflan3 from '../images/chocoflan/flan3.jpg';

export default function Chocoflan() {
  const description =
    'Descubre la delicia del Chocoflan, una mezcla perfecta entre pastel de chocolate y flan suave. Cada cucharada es un encuentro mágico de sabores y texturas que te cautivarán. Ideal para satisfacer tus antojos dulces en cualquier ocasión. ¡Sumérgete en la experiencia del Chocoflan hoy mismo!';
  const title = 'Chocoflan';
  const flavorTitulo = 'Sabores';
  const ingredientesTitulo = 'Ingredientes';
  const sabores = ['Chocolate', 'Caramelo','Cafe','Mocha','Fresa'];
  const ingredientes = ['Fresas','Durasnos','Uvas','Cocó','Oreos','Etc...'];
  const images = [chocoflan1, chocoflan2, chocoflan3];
  const price = ' $35'
    const pageNumber = 2
  return (
    <div>
      <CakeDescription
      pageNumber={pageNumber}
      price={price}
        description={description}
        title={title}
        ingredients={ingredientes}
        flavors={sabores}
        flavorTitle={flavorTitulo}
        ingredientsTitle={ingredientesTitulo}
        images={images}
      />
    </div>
  );
}
