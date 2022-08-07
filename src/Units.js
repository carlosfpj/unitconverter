import React, { useEffect, useState } from 'react';
import DropDownOrigen from './DropDownOrigen.js';
import DropDownDestino from './DropDownDestino.js';

function Units ({opcion, number, result}) {

  const setResult = result.setResult;
  const[unidadesDropdown, setDropdownUnidades] = useState(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)']);
  const[unidadOrigen, setUnidadOrigen] = useState();
  const[unidadDestino, setUnidadDestino] = useState();

  function fetchUnits() {
    switch (opcion) {

      case 'longitud':
        //console.log("se cargarán las unidades de longitud en cada dropdown")
        setDropdownUnidades(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)']);
        break;

      case 'area':
        setDropdownUnidades(['Kilómetro cuadrado (Km2)', 'metro cuadrado (m2)', 'centímetro cuadrado (cm2)', 'milímetro cuadrado (mm2)']);
        break;

      case 'volumen':
        setDropdownUnidades(['metro cúbico (m3)', 'pie cúbico (ft3)', 'centímetro cúbico (cm3)']);
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

      case 'volumen':
        getVolumeEcuations(unidadOrigen, unidadDestino);
        break;

      case 'masa':
        getMassEcuations(unidadOrigen, unidadDestino);
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

    else if ((origen === "centímetro (cm)") && (destino === "milímetro (mm)")) {
      return setResult(number * 10);
    }

    else if ((origen === "milímetro (mm)") && (destino === "Kilómetro (Km)")) {
      return setResult(number / 1000000);
    }

    else if ((origen === "milímetro (mm)") && (destino === "metro (m)")) {
      return setResult(number / 1000);
    }

    else if ((origen === "milímetro (mm)") && (destino === "centímetro (cm)")) {
      return setResult(number / 100);
    }
  }

  function getAreaEcuations(origen, destino) {
    if(origen === destino) {
      return setResult(number);
    }

    else if ((origen === "Kilómetro cuadrado (Km2)") && (destino === "metro cuadrado (m2)")) {
      return setResult(number * 1000000);
    }

    else if ((origen === "Kilómetro cuadrado (Km2)") && (destino === "centímetro cuadrado (cm2)")) {
      return setResult(number * 10000000000);
    }

    else if ((origen === "Kilómetro cuadrado (Km2)") && (destino === "milímetro cuadrado (mm2)")) {
      return setResult(number * 1000000000000);
    }

    else if ((origen === "metro cuadrado (m2)") && (destino === "Kilómetro cuadrado (Km2)")) {
      return setResult(number / 1000000);
    }

    else if ((origen === "metro cuadrado (m2)") && (destino === "centímetro cuadrado (cm2)")) {
      return setResult(number * 10000);
    }

    else if ((origen === "metro cuadrado (m2)") && (destino === "milímetro cuadrado (mm2)")) {
      return setResult (number * 1000000);
    }

    else if ((origen === "centímetro cuadrado (cm2)") && (destino === "Kilómetro cuadrado (Km2)")) {
      return setResult (number / 10000000000);
    }

    else if ((origen === "centímetro cuadrado (cm2)") && (destino === "metro cuadrado (m2)")) {
      return setResult (number / 10000);
    }

    else if ((origen === "centímetro cuadrado (cm2)") && (destino === "milímetro cuadrado (mm2)")) {
      return setResult(number / 100);
    }

    else if ((origen === "milímetro cuadrado (mm2)") && (destino === "Kilómetro cuadrado (Km2)")) {
      return setResult(number / 1000000000000);
    }

    else if ((origen === "milímetro cuadrado (mm2)") && (destino === "metro cuadrado (m2)")) {
      return setResult(number / 1000000);
    }

    else if ((origen === "milímetro cuadrado (mm2)") && (destino === "centímetro cuadrado (cm2)")) {
      return setResult(number / 100);
    }
  }

  function getVolumeEcuations(origen, destino) {
    if(origen === destino) {
      return setResult(number);
    }

    else if ((origen === 'metro cúbico (m3)') && (destino === 'pie cúbico (ft3)')) {
      return setResult(number * 35.3147);
    }

    else if ((origen === 'metro cúbico (m3)') && (destino === 'centímetro cúbico (cm3)')) {
      return setResult(number * 1000000);
    }

    else if ((origen === 'pie cúbico (ft3)') && (destino === 'metro cúbico(m3)')) {
      return setResult(number / 35.3147);
    }

    else if ((origen === 'pie cúbico (ft3)') && (destino === 'centímetro cúbico (cm3)')) {
      return setResult(number * 28320);
    }

    else if ((origen === 'centímetro cúbico (cm3)') && (destino === 'metro cúbico (m3)')) {
      return setResult(number / 1000000);
    }

    else if ((origen === 'centímetro cúbico (cm3)') && (destino === 'pie cúbico (ft3)')) {
      return setResult(number / 28320);
    }
  }

  function getMassEcuations(origen, destino) {
    if (origen === destino) {
      return setResult(number);
    }

    else if ((origen === "Tonelada (T)") && (destino === "kilogramo (Kg)")) {
      return setResult(number * 1000);
    }

    else if ((origen === "Tonelada (T)") && (destino === "gramo (g)")) {
      return setResult(number * 1000000);
    }

    else if ((origen === "Tonelada (T)") && (destino === "miligramo (mg)")) {
      return setResult(number * 1000000000);
    }

    else if ((origen === "kilogramo (Kg)") && (destino === "Tonelada (T)")) {
      return setResult(number / 1000);
    }

    else if ((origen === "kilogramo (Kg)") && (destino === "gramo (g)")) {
      return setResult(number * 1000);
    }

    else if ((origen === "kilogramo (Kg)") && (destino === "miligramo (mg)")) {
      return setResult(number * 1000000);
    }

    else if ((origen === "gramo (g)") && (destino === "Tonelada (T)")) {
      return setResult(number / 1000000);
    }

    else if ((origen === "gramo (g)") && (destino === "kilogramo (Kg)")) {
      return setResult(number / 1000);
    }

    else if ((origen === "gramo (g)") && (destino === "miligramo (mg)")) {
      return setResult(number * 1000);
    }

    else if ((origen === "miligramo (mg)") && (destino === "Tonelada (T)")) {
      return setResult(number / 1000000000);
    }

    else if ((origen === "miligramo (mg)") && (destino === "kilogramo (Kg)")) {
      return setResult(number / 1000000);
    }

    else if ((origen === "miligramo (mg)") && (destino === "gramo (g)")) {
      return setResult(number / 1000);
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