import { BottomNavigation } from './components/BottomNavigation'

import { routes } from './routes'

function App() {
  return (
    <div className='h-screen w-full'>
      {/* Add header here */}
      {routes}
      <BottomNavigation />
    </div>
  )
}

export default App
