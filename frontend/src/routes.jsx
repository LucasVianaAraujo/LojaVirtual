import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/produto' element={<Produto />} />
            </Routes>
        </BrowserRouter>
    )
}