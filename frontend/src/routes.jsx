import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Checkout from './pages/Checkout'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/produto' element={<Produto />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}