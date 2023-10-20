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
    <div>
      <div onClick={() => onCellClick(0)}>{gameBoard[0]}</div>
      <div onClick={() => onCellClick(1)}>{gameBoard[1]}</div>
      <div onClick={() => onCellClick(2)}>{gameBoard[2]}</div>
      <div onClick={() => onCellClick(3)}>{gameBoard[3]}</div>
      <div onClick={() => onCellClick(4)}>{gameBoard[4]}</div>
      <div onClick={() => onCellClick(5)}>{gameBoard[5]}</div>
      <div onClick={() => onCellClick(6)}>{gameBoard[6]}</div>
      <div onClick={() => onCellClick(7)}>{gameBoard[7]}</div>
      <div onClick={() => onCellClick(8)}>{gameBoard[8]}</div>
    </div>
  )
}