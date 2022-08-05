import React, { useEffect, useState } from 'react';
import DropDownOrigen from './DropDownOrigen.js';
import DropDownDestino from './DropDownDestino.js';

function Units ({opcion, number, result}) {

  const setResult = result.setResult;
  const[unidadesDropdown, setDropdownUnidades] = useState(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)']);
  const[unidadOrigen, setUnidadOrigen] = useState();
  const[unidadDestino, setUnidadDestino] = useState();

  const[focusDestino, setFocusDestino] = useState(false);

  function fetchUnits() {
    switch (opcion) {

      case 'longitud':
        //console.log("se cargarán las unidades de longitud en cada dropdown")
        setDropdownUnidades(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)']);
        break;

      case 'area':
        setDropdownUnidades(['kilómetro Cuadrado (Km2)', 'Metro Cuadrado (m2)', 'Centímetro Cuadrado (cm2)', 'milímetro cuadrado (mm2)']);
        break;

      case 'volumen':
        setDropdownUnidades(['Metro cúbico (m3)', 'Pie cúbico (ft3)', 'centímetro cúbico (cm3)']);
        break;

      case 'masa':
        setDropdownUnidades(['Tonelada (T)', 'kilogramo (Kg)', 'gramo (g)', 'miligramo (mg)']);
        break;

      case 'temperatura':
        setDropdownUnidades(['Celcius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'El corazón de tu ex (X_X)']);
        break;

      default:
        break;
    }
  }

  function selectEcuations (o) {
    switch (o) {
      case 'longitud':
        //console.log("se cargarán las ecuaciones de " + o)
        getLongEcuations(unidadOrigen, unidadDestino);
        break;

      case 'area':
        getAreaEcuations(unidadOrigen, unidadDestino);
        break;

      default:
        break;
    }
  }

  function getLongEcuations(origen, destino) {
    if(origen === destino) {
      return setResult(number);
    }

    else if ((origen === "Kilómetro (Km)") && (destino === "metro (m)")) {
      return setResult(number * 1000);
    }

    else if ((origen === "Kilómetro (Km)") && (destino === "centímetro (cm)")) {
      return setResult(number * 100000);
    }

    else if ((origen === "Kilómetro (Km)") && (destino === "milímetro (mm)")) {
      return setResult(number * 1000000);
    }

    else if ((origen === "metro (m)") && (destino === "centímetro (cm)")) {
      return setResult(number * 100);
    }

    else if((origen === "metro (m)") && (destino === "milímetro (mm)")) {
      return setResult(number * 1000);
    }

    else if ((origen === "metro (m)") && (destino === "Kilómetro (Km)")) {
      return setResult(number / 1000);
    }

    else if ((origen === "centímetro (cm)") && (destino === "Kilómetro (Km)")) {
      return setResult(number / 100000);
    }

    else if ((origen === "centímetro (cm)") && (destino === "metro (m)")) {
      return setResult(number / 100);
    }

    else if((origen === "centímetro (cm)") && (destino === "milímetro (mm)")) {
      return setResult(number * 10);
    }

    else if((origen === "milímetro (mm)") && (destino === "Kilómetro (Km)")) {
      return setResult(number / 1000000);
    }

  }

  function getAreaEcuations(origen, destino) {
    if(origen === destino) {
      return setResult(number);
    }

    else if ((origen === "kilómetro Cuadrado (Km2)") && (destino === "Metro Cuadrado (m2)")) {
      return setResult(number * 1000000);
    }
  }

  useEffect(() => {
    fetchUnits();
  }, [opcion])

  useEffect(() => {
    selectEcuations(opcion);
  })

  return (
    <div className="h-64 flex justify-between gap-2.5">
      <div className="flex flex-col w-1/2 border-solid border-2 border-stone-400">
        <h4 className="font-bold border-b-4 p-1">Seleccionar unidad origen</h4>
          <DropDownOrigen unidades={{unidadesDropdown, setUnidadOrigen}}></DropDownOrigen>
      </div>
      <div className="flex flex-col w-1/2 border-solid border-2 border-stone-400">
        <h4 className="font-bold border-b-4 p-1">Seleccionar unidad destino</h4>
        <DropDownDestino unidades={{unidadesDropdown, setUnidadDestino}}></DropDownDestino>
      </div>
    </div>
  )
}

export default Units;