import { useContext } from "react";
import {sidebarOption} from "./OptionContext";

function MainToolbar () {

  const title = useContext(sidebarOption);
  // console.log("title es de tipo: " + typeof(title) + " y su valor es : " + title);
  const title2 = title.unidad[0];
  // console.log("title2 es: " + title2);

  function Mayus(title) {
    // console.log(typeof(title));
    return title.toUpperCase();
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-white">
      <div className="h-16 p-3">
        <h3 className="text-white text-2xl ml-10">PÁGINA DE {Mayus(title2)}</h3>
      </div>
    </div>
  )
}

export default MainToolbar;