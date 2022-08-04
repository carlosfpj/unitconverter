import Main from './Main.js';
import Sidebar from './Sidebar.js';
import React, { useState } from 'react';
import './index.css';

function App() {

  const [opcion, setOpcion] = useState('longitud');

  return (
    <div className="App">
      <div className="grid grid-cols-12 h-screen">
        <Sidebar opcion={{opcion, setOpcion}}>
        </Sidebar>
          <Main opcion={opcion}>
          </Main>
        </div>
      </div>
  );
}

export default App;
