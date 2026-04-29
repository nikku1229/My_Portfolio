import { useEffect, useState } from "react";
import { getProjects } from "../service/projectApi";

const useProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.log("error occurs");
      }
    };

    getData();
  }, []);

  return { projects };
};

export default useProject;
