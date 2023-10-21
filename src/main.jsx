import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import { GameBoard } from './components/GameBoard/GameBoard'
import { PlayerSelect } from './components/PlayerSelect/PlayerSelect.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/player-select',
    element: <PlayerSelect />
  },
  {
    path: '/tic-tac-toe',
    element: <GameBoard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
