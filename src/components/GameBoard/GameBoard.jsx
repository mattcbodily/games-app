import { useState } from 'react'

const newGameBoard = ['', '', '', '', '', '', '', '', '']

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(newGameBoard)
  const [playerTurn, setPlayerTurn] = useState('🦙')

  const changePlayerTurn = () => {
    playerTurn === '🦙' ? setPlayerTurn('🐢') : setPlayerTurn('🦙')
  }

  const onCellClick = (cellNumber) => {
    if (gameBoard[cellNumber]) return

    const gameBoardSlice = gameBoard.slice()

    gameBoard.splice(cellNumber, 0, playerTurn)

    setGameBoard(gameBoardSlice)
    changePlayerTurn()
  }

  return (
    <div className='h-fit grid grid-cols-3 grid-rows-3 gap-0.5'>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(0)}>{gameBoard[0]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(1)}>{gameBoard[1]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(2)}>{gameBoard[2]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(3)}>{gameBoard[3]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(4)}>{gameBoard[4]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(5)}>{gameBoard[5]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(6)}>{gameBoard[6]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(7)}>{gameBoard[7]}</div>
      <div className='h-16 w-16 border-2 rounded-md border-black flex justify-center items-center text-3xl' onClick={() => onCellClick(8)}>{gameBoard[8]}</div>
    </div>
  )
}