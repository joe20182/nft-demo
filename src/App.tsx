import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import Header from '@/components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-wrapper">
        <Suspense fallback={<div>Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </div>
    </div>
  )
}

export default App
