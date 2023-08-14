import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./components/Footer";
import LanguageProvider from "./utils/LanguageContext";
function App() {
  return (
    <>
      <LanguageProvider>
        <NavBar />
        <Outlet />
        <BackToTopBtn />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
