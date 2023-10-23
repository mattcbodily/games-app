import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h2 className='text-4xl mb-8'>Hello! Pick a game</h2>
      <Link className='btn btn-primary' to='/player-select'>
        Tic Tac Toe 3x3
      </Link>
    </div>
  )
}