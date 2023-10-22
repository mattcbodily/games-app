export const GameCell = ({ emoji, onCellClick }) => {
  return (
    <div 
      className='h-28 w-28 border-2 rounded-md border-primary flex justify-center items-center active:bg-primary-focus' 
      onClick={onCellClick}
    >
      {emoji ? <p className='text-6xl'>{emoji}</p> : null}
    </div>
  )
}