import './App.css'
import Footer from './components/shared/Footer/Footer'
import { Header } from './components/shared/Header/Header'
import { AppRoutes } from './Routes'


function App() {

  return (
    <div>
      <Header></Header>
      <AppRoutes />
      <Footer></Footer>
    </div>
  )
}

export default App
