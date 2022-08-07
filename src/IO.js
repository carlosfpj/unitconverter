import React, { useEffect } from "react";

function IO (props) {

  const{input, setInput} = props.input;
  const result = props.result;

  function handleInputOnChange(e) {
    const valueInput = e.target.value;
    return setInput(valueInput);
  }

  return (
    <React.Fragment>
      <div className="flex justify-between gap-2.5 mb-8">
        <div className="flex flex-col w-1/2">
          <label className="mb-3">Medida</label>
          <input className="border-2 border-zinc-500 focus:outline-none focus:border-blue-500" type="text" id="input_medida" onChange={handleInputOnChange} autoComplete="off" placeholder="Ingresa el número aquí"></input>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="mb-3">Resultado</label>
          <label placeholder="0" className="border-2 border-zinc-500">{result}</label>
        </div>
      </div>
    </React.Fragment>
  )
}

export default IO;