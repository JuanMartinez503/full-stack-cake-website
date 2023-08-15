import { useLanguage } from "../utils/LanguageContext";
export default function Footer() {
    const [state, dispatch] = useLanguage(); 

  return (
    <footer>
          {state.language ? (
                <div>
                      <div className="text-center">
          <h2>Contacto</h2>
          <p>
            Teléfono: <a href="tel:812-827-4485">812-827-4485</a>
          </p>
          <p>
            Si tienes preguntas o deseas realizar un pedido, no dudes en
            llamarnos o enviarnos un mensaje de texto. Estaremos encantados de
            atenderte.
          </p>
          <p>
          "Déjate seducir por los sabores dulces de la vida. En Martinez Cakes,
          nos enorgullece endulzar tus momentos especiales con amor y pasión por
          la repostería. ¡Explora nuestros pasteles exquisitos y descubre el
          arte de la felicidad en cada bocado!"
        </p>
        </div>
                </div>
            ):(
                <div>
                    <div className="text-center">
  <h2>Contact Us</h2>
  <p>
    Phone: <a href="tel:812-827-4485">812-827-4485</a>
  </p>
  <p>
    If you have questions or would like to place an order, feel free to call
    us or send us a text message. We'll be delighted to assist you.
  </p>
  <p>
    "Indulge in the sweet flavors of life. At Martinez Cakes, we take pride in
    sweetening your special moments with love and a passion for baking.
    Explore our exquisite cakes and discover the art of happiness in every
    bite!"
  </p>
</div>

                </div>
            )}
      <div>
    
      
      </div>
    </footer>
  );
}
