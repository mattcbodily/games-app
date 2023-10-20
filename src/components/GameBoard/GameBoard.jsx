import { useState } from 'react'

import { TTT_NEW_GAME_BOARD } from '../../constants/Game'

export const GameBoard = ({ playerTurn, setPlayerTurn }) => {
  const [gameBoard, setGameBoard] = useState(TTT_NEW_GAME_BOARD)

  // Find a different way to do this that can share the gameboard state?
  const [playerOneCells, setPlayerOneCells] = useState([])
  const [playerTwoCells, setPlayerTwoCells] = useState([])

  const changePlayerTurn = () => {
    playerTurn === '🦙' ? setPlayerTurn('🐢') : setPlayerTurn('🦙')
  }

  const onCellClick = (cellNumber) => {
    if (gameBoard[cellNumber]) return

    const gameBoardSlice = gameBoard.slice()

    gameBoardSlice.splice(cellNumber, 1, playerTurn)

    setGameBoard(gameBoardSlice)

    if (playerTurn === '🦙') {
      setPlayerOneCells([...playerOneCells, cellNumber])
    } else {
      setPlayerTwoCells([...playerTwoCells, cellNumber])
    }

    // Check for winner

    changePlayerTurn()
  }

  console.log('1', playerOneCells)
  console.log('2', playerTwoCells)

  return (
    <div className='h-fit grid grid-cols-3 grid-rows-3 gap-1'>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(0)}>{gameBoard[0]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(1)}>{gameBoard[1]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(2)}>{gameBoard[2]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(3)}>{gameBoard[3]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(4)}>{gameBoard[4]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(5)}>{gameBoard[5]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(6)}>{gameBoard[6]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(7)}>{gameBoard[7]}</div>
      <div className='h-28 w-28 border-2 rounded-md border-black flex justify-center items-center text-6xl active:bg-primary-focus' onClick={() => onCellClick(8)}>{gameBoard[8]}</div>
    </div>
  )
}