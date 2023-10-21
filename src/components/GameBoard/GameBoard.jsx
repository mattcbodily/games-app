import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { TTT_NEW_GAME_BOARD } from '../../constants/Game'

import { checkForWinner } from '../../utils/GamePlay'

// Move game cell to its own component and move this with it as the className
const gameCellStyles = 'h-28 w-28 border-2 rounded-md border-primary flex justify-center items-center text-6xl active:bg-primary-focus'

export const GameBoard = () => {
  let { state } = useLocation()

  const [gameBoard, setGameBoard] = useState(TTT_NEW_GAME_BOARD)
  const [playerTurn, setPlayerTurn] = useState(state.playerOne)
  // Add countdown logic here

  // Find a different way to do this that can share the gameboard state?
  const [playerOneCells, setPlayerOneCells] = useState([])
  const [playerTwoCells, setPlayerTwoCells] = useState([])

  const changePlayerTurn = () => {
    playerTurn === state.playerOne ? setPlayerTurn(state.playerTwo) : setPlayerTurn(state.playerOne)
  }

  const onCellClick = (cellNumber) => {
    if (gameBoard[cellNumber]) return

    const gameBoardSlice = gameBoard.slice()

    gameBoardSlice.splice(cellNumber, 1, playerTurn)

    setGameBoard(gameBoardSlice)

    if (playerTurn === state.playerOne) {
      setPlayerOneCells([...playerOneCells, cellNumber])
    } else {
      setPlayerTwoCells([...playerTwoCells, cellNumber])
    }

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
          <div className={gameCellStyles} onClick={() => onCellClick(0)}>{gameBoard[0]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(1)}>{gameBoard[1]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(2)}>{gameBoard[2]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(3)}>{gameBoard[3]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(4)}>{gameBoard[4]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(5)}>{gameBoard[5]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(6)}>{gameBoard[6]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(7)}>{gameBoard[7]}</div>
          <div className={gameCellStyles} onClick={() => onCellClick(8)}>{gameBoard[8]}</div>
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
            <button className='btn btn-accent'>
              <Link to='/'>
                Leave game
              </Link>
            </button>
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
            <button className='btn btn-accent'>
              <Link to='/'>
                Leave game
              </Link>
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}