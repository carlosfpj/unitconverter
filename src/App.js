import Main from './Main.js';
import Sidebar from './Sidebar.js';
import React, { useState } from 'react';
import OptionProvider from './OptionContext.js';
import './index.css';

function App() {

  const [opcion, setOpcion] = useState('longitud');


  return (
    <div className="App">
      <div className="grid grid-cols-12 h-screen font-Commissioner">
        <Sidebar opcion={{opcion, setOpcion}}>
        </Sidebar>
        <OptionProvider value={opcion}>
          <Main>
          </Main>
        </OptionProvider>
        </div>
      </div>
  );
}

export default App;
