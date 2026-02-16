import { Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <HeaderComponent />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route
            path="*"
            element={
              <div className="panel">
                <h1>Page not found</h1>
                <p className="muted">Try the navigation above to continue.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
