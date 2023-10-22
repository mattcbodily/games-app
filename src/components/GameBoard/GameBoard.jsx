import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { GameCell } from './GameCell'

import { TTT_NEW_GAME_BOARD } from '../../constants/Game'

import { checkForWinner } from '../../utils/GamePlay'

export const GameBoard = () => {
  let { state } = useLocation()

  const [gameBoard, setGameBoard] = useState(TTT_NEW_GAME_BOARD)
  const [playerTurn, setPlayerTurn] = useState(state.playerOne)
  // Add countdown logic here?

  const changePlayerTurn = () => {
    playerTurn === state.playerOne ? setPlayerTurn(state.playerTwo) : setPlayerTurn(state.playerOne)
  }

  const onCellClick = (cellNumber) => {
    if (gameBoard[cellNumber]) return

    const gameBoardSlice = gameBoard.slice()

    gameBoardSlice.splice(cellNumber, 1, playerTurn)

    setGameBoard(gameBoardSlice)

    // Checks for winner
    const roundHasWinner = checkForWinner(gameBoardSlice, state.playerOne, state.playerTwo)

    if (roundHasWinner) {
      return document.getElementById('game_winner_modal').showModal()
    }

    // Checks for tie
    const tieGame = gameBoardSlice.every(val => !!val === true)
      
    if (tieGame) {
      return document.getElementById('tie_game_modal').showModal()
    }

    changePlayerTurn()
  }

  return (
    <>
      <main className='h-screen w-full flex flex-col justify-center items-center'>
        <p className='text-4xl mb-8'>{playerTurn}'s turn</p>
        <div className='h-fit grid grid-cols-3 grid-rows-3 gap-1'>
          {gameBoard.map((emoji, i) => <GameCell emoji={emoji} onCellClick={() => onCellClick(i)} />)}
        </div>
      </main>
      <dialog id='game_winner_modal' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl text-center mb-4'>{playerTurn} wins!</h3>
          <form className='flex flex-col gap-2' method='dialog'>
            <button 
              className='btn btn-primary' 
              onClick={() => {
                setGameBoard(TTT_NEW_GAME_BOARD)
                setPlayerTurn(state.playerOne)
              }}
            >
              Play again
            </button>
            <Link className='btn btn-accent' to='/'>
              Leave game
            </Link>
          </form>
        </div>
      </dialog>
      <dialog id='tie_game_modal' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl text-center mb-4'>It's a tie!</h3>
          <form className='flex flex-col gap-2' method='dialog'>
            <button 
              className='btn btn-primary' 
              onClick={() => {
                setGameBoard(TTT_NEW_GAME_BOARD)
                setPlayerTurn(state.playerOne)
              }}
            >
              Play again
            </button>
            <Link className='btn btn-accent' to='/'>
              Leave game
            </Link>
          </form>
        </div>
      </dialog>
    </>
  )
}