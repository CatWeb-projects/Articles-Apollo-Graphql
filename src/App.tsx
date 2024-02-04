import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes';

import './App.scss';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
