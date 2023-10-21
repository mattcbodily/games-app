/* 
  Constant prefix game legend:
  - TTT -> Tic Tac Toe
*/

// Maybe add themes for game pieces? 9 emoji's in each theme
export const GAME_PIECES = ['❌', '⭕', '🦙', '🐢', '🦖', '🦊', '🐴', '🦄', '🐊']

export const TTT_NEW_GAME_BOARD = ['', '', '', '', '', '', '', '', '']

export const TTT_WIN_CONDITIONS = [
  // Row win conditions
  [0, 1, 2], [3, 4, 5], [6, 7, 8],

  // Column win conditions
  [0, 3, 6], [1, 4, 7], [2, 5, 8],

  // Diagonal win conditions
  [0, 4, 8], [2, 4, 6]
]