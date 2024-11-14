import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import ProductList from './pages/ProductList/ProductList'
import Login from "./pages/Login/Login";
import Shipping from "./pages/Shipping/Shipping";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList/>}></Route>
                <Route path="/carrinho" element={<Cart />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/entrega" element={<Shipping />}></Route>
            </Routes>
        </Router>
    )
}