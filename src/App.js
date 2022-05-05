import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import About from "./page/about/components/About";
import Contact from "./page/contact/components/Contact";
import Work from "./page/work/components/Work";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import ButtonToTop from "./common/ButtonToTop";
import { useEffect, useState } from "react";
import Skills from "./page/skills/components/Skills";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  })

  return (
    <>
      {!loader ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ButtonToTop />
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Work />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
