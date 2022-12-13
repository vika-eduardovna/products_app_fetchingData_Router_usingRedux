import AboutPage from '../../pages/AboutPage/index'
import BasketPage from '../../pages/BasketPage/index'
import { Route, Routes } from 'react-router-dom'
import ProductsContainer from '../ProductsContainer/index'
import Nav from '../Nav'
import DescriptionPage from '../../pages/DescriptionPage'
import CategoriesPage from '../../pages/CategoriesPage'

function App() {
  return (
    < >
      <Nav />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='product/:product_id' element={<DescriptionPage />} />
        <Route path='/categories' element={<CategoriesPage/>}/>
      </Routes>
    </>
  );
}

export default App;
