import { Routes, Route } from 'react-router-dom'

import { GameBoard } from './components/GameBoard'
import { Home } from './components/Home'
import { PlayerSelect } from './components/PlayerSelect'
import { Settings } from './components/Settings'

export const routes = (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/player-select' element={<PlayerSelect />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/tic-tac-toe' element={<GameBoard />} />
  </Routes>
)