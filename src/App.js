import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";
import Header from "./common/Header";
import About from "./page/about/components/About";
import Contact from "./page/contact/components/Contact";
import Work from "./page/work/components/Work";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import ButtonToTop from "./common/ButtonToTop";
import { createContext, useEffect, useState } from "react";
import Skills from "./page/skills/components/Skills";
import { obtenerScroll } from "./utils";
import SocialLinks from "./common/SocialLink";
import WorkDetails from "./page/work/components/WorkDetails";

export const Context = createContext();
function App() {
  const [scroll, setScroll] = useState(0);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
    document.addEventListener("scroll", () => {
      setScroll(obtenerScroll());
    });
  });
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <div>
      <Context.Provider value={{ scroll, setScroll }}>
        {!loader ? (
          <Loader />
        ) : (
          <>
            <ButtonToTop />
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/works" element={<Work />} />
              <Route path="/works/:name" element={<WorkDetails/>} />
              </Routes>
              <SocialLinks/>
            <Footer />
          </>
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
