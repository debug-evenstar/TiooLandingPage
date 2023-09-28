import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from './pages/library'
import LibraryDetails from './pages/libraryDetails'
import Layout from './layout/layout'

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route index path="/library" element={<Library />} />
            <Route index path="/library/details" element={<LibraryDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
