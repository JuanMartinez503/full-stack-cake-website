import { useEffect, useState } from "react";
import { useLanguage } from "../utils/LanguageContext";
export default function BackToTopBtn() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [state, dispatch] = useLanguage();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {state.language ? (
        <div>
          {backToTopButton && (
            <div className="d-flex justify-content-end">
              <button
                id="scroll-Btn"
                className="btn m-2 login-btn"
                onClick={scrollUp}
              >
                Volver arriba
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {backToTopButton && (
            <div className="d-flex justify-content-end">
              <button
                id="scroll-Btn"
                className="btn m-2 login-btn"
                onClick={scrollUp}
              >
                Scroll to top
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
