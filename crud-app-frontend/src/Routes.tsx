import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import Vitrine from './pages/Vitrine/Vitrine'
import Login from "./pages/Login/Login";
import Shipping from "./pages/Shipping/Shipping";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Vitrine/>}></Route>
                <Route path="/carrinho" element={<Cart />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/entrega" element={<Shipping />}></Route>
                <Route path="/cadastro" element={<Register/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    )
}