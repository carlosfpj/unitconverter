import { useState } from "react";

function DropDownDestino({ unidades: { unidadesDropdown, setUnidadDestino} }) {

  const [focusedUnit, setFocusedUnit] = useState(null);

  function getUnitID(i) {
    setFocusedUnit(i)
    console.log(focusedUnit);
  }

  return (
    <ul>
      {unidadesDropdown.map((item, i) => {
        const classes = focusedUnit === i ? "border-l-8 border-blue-300 bg-blue-300" : "border-l-4 border-transparent hover:bg-gray-200 hover:border-l-4";
        return (
          <li className="w-full py-1">
            <a
              onClick={() => { getUnitID(i); setUnidadDestino(item); }}
              href="/#"
              key={i}
              value={item}
              className={`inline-block w-full ${classes}`}
            >{item}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default DropDownDestino;