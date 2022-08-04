import { useState } from 'react';

function DropDownOrigen({ unidades: { unidadesDropdown, setUnidadOrigen }}) {

  const[focusedUnit, setFocusedUnit] = useState(null);

  function getUnitID(i) {
    setFocusedUnit(i)
    console.log(focusedUnit);
  }

  return(
    <div className="h-96">
      <ul>
        {unidadesDropdown.map((item, i) => {
          const classes = focusedUnit === i ? "border-l-8 border-blue-300 bg-blue-300" : "border-l-4 border-transparent hover:bg-gray-200 hover:border-l-4";
          return (
            <li className="w-full py-1">
              <a
                onClick={()=>{getUnitID(i);setUnidadOrigen(item);}}
                href="/#"
                key={i}
                value={item}
                className={`inline-block w-full ${classes}`}
              >{item}</a>
            </li>
            )
        })}
      </ul>
    </div>
  )
}
export default DropDownOrigen;