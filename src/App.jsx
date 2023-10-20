import { useState } from 'react'

import { GameBoard } from './components/GameBoard'

// Add more emoji's and let player pick from a small amount (9?)

function App() {
  const [playerTurn, setPlayerTurn] = useState('🦙')

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <p className='text-4xl mb-8'>{playerTurn}'s turn</p>
      <GameBoard playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
    </div>
  )
}

export default App
