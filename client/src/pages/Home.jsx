import tresLeches from '../images/tresleches.png'
import pasteles from '../images/pastel.png'
import cupcakes from '../images/cupcake2.jpg'
import chocoFlan from '../images/chocoflan.png'
export default function Home() {

  return (
    <div className="p-4">
      <h3 className="text-center mb-3 home-h3">
        {" "}
        ¡Bienvenidos a nuestro delicioso sitio web de pasteles! En nuestro
        rincón dulce en línea, te invitamos a explorar una exquisita selección
        de delicias que harán que tus papilas gustativas bailen de alegría.
      </h3>
      <div className="cake-intros">
        <h3 className='text-center'>Tres Leches</h3>
        <div className="tres-intro d-flex">
          {" "}
          <p>
          ¿Antojo de algo tierno y húmedo? Nuestro Tres Leches, empapado en una
          mezcla celestial de leches, te brindará una experiencia celestial en
          cada bocado.{" "} 
          </p>
          <img src={tresLeches} alt="pastel de tres leches" />
          
        </div>
        <h3 className='text-center'>Pasteles</h3>

        <div className="pasteles-intro d-flex">
            <img src={pasteles} alt="pastel regular" />
        <p>
        ¿Buscas un regalo de sabor para tu paladar? Nuestros Pasteles, llenos
          de autenticidad y cariño, son la elección perfecta.{" "}
        </p>
        </div>
        <h3 className='text-center'>Chocoflan</h3>

        <div className='d-flex'>
            
       <p>
        
       {" "}
          Y no podemos olvidarnos del irresistible Chocoflan: el maridaje
          perfecto entre el chocolate y el flan, una maravilla que te hará
          cerrar los ojos con cada cucharada.
       </p>
       <img src={chocoFlan} alt="chocoflan" />
        </div>
        <h3 className='text-center'>Cupcakes</h3>

        <div className='d-flex'>
            <img src={cupcakes} alt="cupcakes" />
        <p>
        ¿Quieres algo más pequeño pero igualmente delicioso? Nuestros
          cupcakes, adornados con creatividad y amor, son perfectos para
          endulzar tu día.
        </p>
        </div>
        <p className='my-4'> Ya sea que estés celebrando un momento especial o
          simplemente quieras darte un capricho, estamos aquí para satisfacer
          tus antojos más dulces. ¡Explora nuestra variedad de sabores y
          sumérgete en la magia de los pasteles!</p>
      </div>
    </div>
  );
}
