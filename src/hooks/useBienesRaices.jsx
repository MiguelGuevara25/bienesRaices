import { useContext } from "react";
import BienesRaicesContext from "../context/BienesRaicesProvider";

const useBienesRaices = () => {
  return useContext(BienesRaicesContext);
};

export default useBienesRaices;