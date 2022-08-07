import IO from './IO.js';
import Units from './Units.js';
import Info from './Info.js';
import { useState } from 'react';

function MainContent() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="mx-auto w-5/6 mt-6">
        <IO input={{input ,setInput}} result={result} ></IO>
        <Units number={input} result={{result, setResult}} ></Units>
        <Info></Info>
      </div>
  )
}

export default MainContent;
