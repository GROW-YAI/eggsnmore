import {BrowserRouter as Router, Routes, Route} from 'react-router'
import LandingPage from './pages/LandingPage';
import AllProducts from './pages/AllProductsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
         <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </Router>
  )
}

export default App;