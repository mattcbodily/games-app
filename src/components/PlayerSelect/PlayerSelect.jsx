import { useState } from 'react'

import { Link } from 'react-router-dom'

import { GAME_PIECES } from '../../constants/Game'

export const PlayerSelect = () => {
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')

  const handlePlayerSelection = piece => {
    if (playerOne && piece !== playerOne) {
      setPlayerTwo(piece)
    } else {
      setPlayerOne(piece)
    }
  }

  return (
    <div className='h-screen w-full flex flex-col items-center'>
      <div className='w-[290px] mt-8 mb-8 flex justify-between'>
        <div className='h-8 flex flex-col items-center'>
          <p className='text-4xl'>{playerOne}</p>
          <span className='text-lg'>Player 1</span>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-4xl'>{playerTwo}</p>
          <span className='text-lg'>Player 2</span>
        </div>
      </div>
      <p className='text-2xl mb-8'>{`Player ${playerOne ? 'two' : 'one'}, choose an emoji!`}</p>
      <div className='h-fit grid grid-cols-3 grid-rows-3 gap-1'>
        {GAME_PIECES.map(piece => (
          <div className={`h-28 w-28 border-2 rounded-md border-primary flex justify-center items-center text-6xl cursor-pointer ${playerOne === piece || playerTwo === piece ? 'bg-primary' : ''} active:bg-primary-focus`} key={piece} onClick={() => handlePlayerSelection(piece)}>{piece}</div>
        ))}
      </div>
      <Link 
        className='btn btn-primary mt-8' 
        disabled={!playerOne || !playerTwo} 
        state={{ playerOne, playerTwo }}
        to='/tic-tac-toe'
      >
        Start Game
      </Link>
    </div>
  )
}