import React, { useContext, useEffect, useState } from 'react';
import DropDownOrigen from './DropDownOrigen.js';
import DropDownDestino from './DropDownDestino.js';
import {sidebarOption} from './OptionContext.js'

function Units ({number, result}) {

  const setResult = result.setResult;
  const[unidadesDropdown, setDropdownUnidades] = useState(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)']);
  const[unidadOrigen, setUnidadOrigen] = useState();
  const[unidadDestino, setUnidadDestino] = useState();
  const contexto = useContext(sidebarOption);
  const opcion = contexto.unidad[0]


  function fetchUnits() {
    switch (opcion) {

      case 'longitud':
        setDropdownUnidades(['Kilómetro (Km)', 'metro (m)', 'centímetro (cm)', 'milímetro (mm)', 'test', 'test', 'test', 'test', 'test', 'test']);
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

      case 'tiempo':
        setDropdownUnidades(['Año (A) (no Biciesto)', 'Día (D)', 'hora (h)', 'minuto (m)', 'segundo (s)']);
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

      case 'tiempo':
        getTimeEcuations(unidadOrigen, unidadDestino);
        break;

      case 'temperatura':
        getTempEcuations(unidadOrigen, unidadDestino);
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

  function getTimeEcuations(origen, destino) {
    if (origen === destino) {
      return setResult(number);
    }

    else if ((origen === "Año (A) (no Biciesto)") && (destino === "Día (D)")) {
      return setResult(number * 365);
    }

    else if ((origen === "Año (A) (no Biciesto)") && (destino === "hora (h)")) {
      return setResult(number * 365 * 24);
    }

    else if ((origen === "Año (A) (no Biciesto)") && (destino === "minuto (m)")) {
      return setResult(number * 365 * 24 * 60);
    }

    else if ((origen === "Año (A) (no Biciesto)") && (destino === "segundo (s)")) {
      return setResult(number * 365 * 24 * 60 * 60);
    }

    else if ((origen === "Día (D)") && (destino === "Año (A) (no Biciesto)")) {
      return setResult(number / 365);
    }

    else if ((origen === "Día (D)") && (destino === "hora (h)")) {
      return setResult(number * 24);
    }

    else if ((origen === "Día (D)") && (destino === "minuto (m)")) {
      return setResult(number * 24 * 60);
    }

    else if ((origen === "Día (D)") && (destino === "segundo (s)")) {
      return setResult(number * 24 * 60 * 60);
    }

    else if ((origen === "hora (h)") && (destino === "Año (A) (no Biciesto)")) {
      return setResult(number / 24 / 365);
    }

    else if ((origen === "hora (h)") && (destino === "Día (D)")) {
      return setResult(number / 24);
    }

    else if ((origen === "hora (h)") && (destino === "minuto (m)")) {
      return setResult(number * 60);
    }

    else if ((origen === "hora (h)") && (destino === "segundo (s)")) {
      return setResult(number * 60 * 60);
    }

    else if ((origen === "minuto (m)") && (destino === "Año (A) (no Biciesto)")) {
      return setResult(number / 60 / 24 / 365);
    }

    else if ((origen === "minuto (m)") && (destino === "Día (D)")) {
      return setResult(number / 60 / 24);
    }

    else if ((origen === "minuto (m)") && (destino === "hora (h)")) {
      return setResult(number / 60);
    }

    else if ((origen === "minuto (m)") && (destino === "segundo (s)")) {
      return setResult(number * 60);
    }

    else if ((origen === "segundo (s)") && (destino === "Año (A) (no Biciesto)")) {
      return setResult(number / 60 / 60 / 24 / 365);
    }

    else if ((origen === "segundo (s)") && (destino === "Día (D)")) {
      return setResult(number / 60 / 60 / 24);
    }

    else if ((origen === "segundo (s)") && (destino === "hora (h)")) {
      return setResult(number / 60 / 60);
    }

    else if ((origen === "segundo (s)") && (destino === "minuto (m)")) {
      return setResult(number / 60);
    }
  }

  function getTempEcuations(origen, destino) {

    if ((origen === "El corazón de tu ex (X_X)") && (destino === "El corazón de tu ex (X_X)")) {
      return setResult("DÉJALA IR!!!");
    }

    if (origen === destino) {
      return setResult(number);
    }

    else if ((origen === "Celcius (°C)") && (destino === "Fahrenheit (°F)")) {
      return setResult((parseFloat(number) * (9/5)) + 32);
    }

    else if ((origen === "Celcius (°C)") && (destino === "Kelvin (K)")) {
      return setResult(parseFloat(number) + (273.15));
    }

    else if ((origen === "Celcius (°C)") && (destino === "El corazón de tu ex (X_X)")) {
      return setResult("Frozen");
    }

    else if ((origen === "Fahrenheit (°F)") && (destino === "Celcius (°C)")) {
      return setResult((number - 32) * 5/9);
    }

    else if ((origen === "Fahrenheit (°F)") && (destino === "Kelvin (K)")) {
      return setResult((number - 32) * (5 / 9) + (273.15));
    }

    else if ((origen === "Fahrenheit (°F)") && (destino === "El corazón de tu ex (X_X)")) {
      return setResult("Frozen");
    }

    else if ((origen === "Kelvin (K)") && (destino === "Celcius (°C)")) {
      return setResult(number - 273.15);
    }

    else if ((origen === "Kelvin (K)") && (destino === "Fahrenheit (°F)")) {
      return setResult((number - 273.15) * (9/5) + 32);
    }

    else if ((origen === "Kelvin (K)") && (destino === "El corazón de tu ex (X_X)")) {
      return setResult("Frozen");
    }

    else if ((origen === "El corazón de tu ex (X_X)") && (destino === "Celcius (°C)")) {
      return setResult("NO");
    }

    else if ((origen === "El corazón de tu ex (X_X)") && (destino === "Fahrenheit (°F)")) {
      return setResult("INSISTAS");
    }

    else if ((origen === "El corazón de tu ex (X_X)") && (destino === "Kelvin (K)")) {
      return setResult("MAS");
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