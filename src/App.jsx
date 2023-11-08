import { BottomNavigation } from './components/BottomNavigation'

import { routes } from './routes'

function App() {
  return (
    <div>
      {/* Add header here */}
      {routes}
      <BottomNavigation />
    </div>
  )
}

export default App
