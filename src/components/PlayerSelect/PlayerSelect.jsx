import { useState } from 'react'

import { Link } from 'react-router-dom'

import { GAME_PIECES } from '../../constants/Game'

export const PlayerSelect = () => {
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')

  return (
    <main className='h-screen w-full flex flex-col justify-center items-center'>
      <p className='text-2xl mb-8'>{`Player ${playerOne ? 'two' : 'one'}, select your game piece!`}</p>
      <div className='h-fit grid grid-cols-3 grid-rows-3 gap-1'>
        {GAME_PIECES.map(piece => (
          <div className='h-28 w-28 border-2 rounded-md border-primary flex justify-center items-center text-6xl active:bg-primary-focus' key={piece} onClick={playerOne ? () => setPlayerTwo(piece) : () => setPlayerOne(piece)}>{piece}</div>
        ))}
      </div>
      <button 
        className='btn btn-primary mt-8' 
        disabled={!playerOne || !playerTwo}
      >
        <Link to='/tic-tac-toe' state={{ playerOne, playerTwo }}>
          Start Game
        </Link>
      </button>
    </main>
  )
}