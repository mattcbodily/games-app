import { useState } from 'react'

import { GameBoard } from './components/GameBoard'

// TO DO:

// Add start game flow: 
// 1. Players pick an emoji game piece 
// 2. Add a countdown to start (daisyui has a countdown class)?

// Add wins and losses display, and "play again" flow

// Make it a pwa and host it on netlify

// Cool features
// - Tic Tac Toe board with 4x4 grid, 5x5 grid, etc

// In the future
// - Add more games
// - Add ability to play over bluetooth or wifi?
// - Add themeing

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
