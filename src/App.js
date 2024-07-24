import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GameMenu from './pages/game-menu';
import NewGame from './pages/new-game';
import LoadGame from './pages/load-game';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameMenu />} />
          <Route path='/game-menu' element={<GameMenu />} />
          <Route path='/new-game' element={<NewGame />} />
          <Route path='/load-game' element={<LoadGame />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
