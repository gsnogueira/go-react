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
import { isAuthenticated } from "./services/session.service";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Vitrine />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/entrega" element={isAuthenticated() ? <Shipping /> : <Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}