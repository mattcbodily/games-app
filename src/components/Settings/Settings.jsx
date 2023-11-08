export const Settings = () => {
  const changeTheme = (theme) => {
    document.documentElement.dataset.theme = theme
  }

  return (
    <div className='h-screen w-full p-8'>
      <h2 className='text-4xl mb-8'>Settings</h2>
      <h3 className='text-xl mb-4'>Themes</h3>
      <div className='flex flex-col gap-2'>
        <div className='btn w-full' data-theme='light' onClick={() => changeTheme('light')}>
          <span>Light</span>
          <div className='h-4 w-4 rounded bg-primary' />
          <div className='h-4 w-4 rounded bg-secondary' />
          <div className='h-4 w-4 rounded bg-accent' />
          <div className='h-4 w-4 rounded bg-neutral' />
        </div>
        <div className='btn w-full' data-theme='dark' onClick={() => changeTheme('dark')}>
          <span>Dark</span>
          <div className='h-4 w-4 rounded bg-primary' />
          <div className='h-4 w-4 rounded bg-secondary' />
          <div className='h-4 w-4 rounded bg-accent' />
          <div className='h-4 w-4 rounded bg-neutral' />
        </div>
        <div className='btn w-full' data-theme='cmyk' onClick={() => changeTheme('cmyk')}>
          <span>Cmyk</span>
          <div className='h-4 w-4 rounded bg-primary' />
          <div className='h-4 w-4 rounded bg-secondary' />
          <div className='h-4 w-4 rounded bg-accent' />
          <div className='h-4 w-4 rounded bg-neutral' />
        </div>
        <div className='btn w-full' data-theme='dracula' onClick={() => changeTheme('dracula')}>
          <span>Dracula</span>
          <div className='h-4 w-4 rounded bg-primary' />
          <div className='h-4 w-4 rounded bg-secondary' />
          <div className='h-4 w-4 rounded bg-accent' />
          <div className='h-4 w-4 rounded bg-neutral' />
        </div>
      </div>
    </div>
  )
}