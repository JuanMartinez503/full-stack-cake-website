import CakeDescription from "../components/CakeDescription.jsx"
import tres1 from '../images/tresleches/tresleches1.jpg'
import tres2 from '../images/tresleches/tresleches2.jpg'
import tres3 from '../images/tresleches/tresleches3.jpg'
import tres4 from '../images/tresleches/tresleches4.jpg'

export default function TresLeches(){
    const description = '¡Descubre la magia del Pastel Tres Leches! Nuestra creación sublime combina un tierno bizcocho con una mezcla de tres leches y una capa de crema fresca. Cada bocado es una explosión de sabor y textura que te transportará a un paraíso dulce. Ideal para cualquier ocasión especial. ¡Sumérgete en la experiencia del Pastel Tres Leches hoy mismo!'
    const title = 'Tres Leches'
    const flavorTitulo = 'Sabores!'
    const ingredientesTitulo = 'Ingredientes!'
    const sabores = ['Chocolate', 'Vainilla']
    const ingredientes = ['Oreo', 'Fresas','Cherries', 'Cualquier cosa que dese']
    const images=[tres1,tres2, tres3, tres4 ]
    return (
        <div>
            <CakeDescription description={description} title={title} ingredients={ingredientes} flavors={sabores} flavorTitle={flavorTitulo} ingredientsTitle={ingredientesTitulo} images={images}/>
        </div>
    )
}