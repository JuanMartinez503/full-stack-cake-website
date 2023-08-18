import tresLeches from '../images/tresleches.png'
import pasteles from '../images/pastel.jpg'
import { useLanguage } from '../utils/LanguageContext'
import cupcakes from '../images/cupcake2.jpg'
import chocoFlan from '../images/chocoflan.png'
import Aos from 'aos'
import {useEffect} from 'react'
export default function Home() {
    const [state, dispatch] = useLanguage(); 
    useEffect(()=>{
        Aos.init({duration:1000, delay:300} )
    },[])

  return (
    <div className="p-4">
        {state.language ? (
            <div>

      <h3 className="text-center mb-3 home-h3" >
        {" "}
        ¡Bienvenidos a nuestro delicioso sitio web de pasteles! En nuestro
        rincón dulce en línea, te invitamos a explorar una exquisita selección
        de delicias que harán que tus papilas gustativas bailen de alegría.
      </h3>
      <div className="cake-intros">
        <h3 className='text-center'>Tres Leches</h3>
        <div className="tres-intro d-flex">
          {" "}
          <p data-aos="fade-right">
          ¿Antojo de algo tierno y húmedo? Nuestro Tres Leches, empapado en una
          mezcla celestial de leches, te brindará una experiencia celestial en
          cada bocado.{" "} 
          </p>
          <img src={tresLeches} data-aos="fade-left" alt="pastel de tres leches" />
          
        </div>
        <h3 className='text-center'>Pasteles</h3>

        <div className="pasteles-intro d-flex">
            <img src={pasteles} alt="pastel regular" />
        <p data-aos="fade-right">
        ¿Buscas un regalo de sabor para tu paladar? Nuestros Pasteles, llenos
          de autenticidad y cariño, son la elección perfecta.{" "}
        </p>
        </div>
        <h3 className='text-center'>Chocoflan</h3>

        <div className='d-flex'>
            
       <p data-aos="fade-right">
        
       {" "}
          Y no podemos olvidarnos del irresistible Chocoflan: la combinacion
          perfecto entre el chocolate y el flan, una maravilla que te hará
          cerrar los ojos con cada cucharada.
       </p>
       <img src={chocoFlan} alt="chocoflan"data-aos="fade-left" />
        </div>
        <h3 className='text-center'>Cupcakes</h3>

        <div className='d-flex'>
            <img src={cupcakes} alt="cupcakes" data-aos="fade-left" />
        <p data-aos="fade-right">
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
        ):(
            <div>

            <h3 className="text-center mb-3 home-h3" >
    Welcome to our delicious cake website! In our sweet online corner, we invite you to explore an exquisite selection of delights that will make your taste buds dance with joy.
</h3>
<div className="cake-intros">
    <h3 className='text-center'>Tres Leches</h3>
    <div className="tres-intro d-flex">
        <p data-aos="fade-right">
        Craving something tender and moist? Our Tres Leches, soaked in a heavenly blend of milks, will provide you with a heavenly experience in every bite.
        </p>
        <img src={tresLeches} data-aos="fade-left" alt="Tres Leches cake" />
    </div>
    <h3 className='text-center'>Cakes</h3>
    <div className="cakes-intro d-flex">
        <img src={pasteles} alt="regular cake" />
        <p data-aos="fade-right">
        Looking for a flavor-packed treat for your palate? Our Cakes, full of authenticity and care, are the perfect choice.
        </p>
    </div>
    <h3 className='text-center'>Chocoflan</h3>
    <div className='d-flex'>
        <p data-aos="fade-right">
        And we can't forget the irresistible Chocoflan: the perfect marriage between chocolate and flan, a marvel that will make you close your eyes with every spoonful.
        </p>
        <img src={chocoFlan} alt="Chocoflan" data-aos="fade-left" />
    </div>
    <h3 className='text-center'>Cupcakes</h3>
    <div className='d-flex'>
        <img src={cupcakes} alt="cupcakes" data-aos="fade-left" />
        <p data-aos="fade-right">
        Want something smaller but equally delicious? Our cupcakes, adorned with creativity and love, are perfect to sweeten your day.
        </p>
    </div>
    <p className='my-4'> Whether you're celebrating a special moment or simply want to treat yourself, we're here to satisfy your sweetest cravings. Explore our variety of flavors and immerse yourself in the magic of cakes!</p>
</div>
            </div>

        )}
    </div>
  );
}
