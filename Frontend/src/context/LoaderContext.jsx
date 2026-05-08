import { createContext, useContext, useEffect, useState } from "react";
import API from "../service/api";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [splashLoader, setSplashLoader] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let interval;

    const backendCheck = async () => {
      try {
        const res = await API.get("/health");

        if (res.status === 200) {
          clearInterval(interval);

          setTimeout(() => {
            setSplashLoader(false);
          }, 5000);
        }
      } catch (error) {
        console.log("Backend still loading...");
      }
    };

    backendCheck();

    interval = setInterval(backendCheck, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContext.Provider value={{ splashLoader, loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
