import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectView from "./pages/ProjectView";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import MobileView from "./pages/MobileView";
import SplashScreen from "./components/SplashScreen";
import { useLoader } from "./context/LoaderContext";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { splashLoader } = useLoader();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return <MobileView />;
  }

  if (splashLoader) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectView />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
