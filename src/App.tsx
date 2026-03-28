import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import HomePage from './pages/HomePage'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load catalog page for better performance
const LazyCatalogPage = lazy(() => import('./pages/CatalogPage'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/catalogo" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyCatalogPage />
            </Suspense>
          } 
        />
        <Route path="/products" element={<LazyCatalogPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App