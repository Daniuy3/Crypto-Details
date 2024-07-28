import { useEffect } from "react"
import CriptoForm from "./components/CriptoForm"
import { useCriptoStore } from "./store"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CriptoDetailsDisplay from "./components/CriptoDetailsDisplay";

function App() {
  const { fetchCripto } = useCriptoStore()

    useEffect(() => {
      fetchCripto()
    },[])
    
  return (
    <>
      <div className="container">
        <h1 className="heading">Cotizador de <span>Criptomonedas</span></h1>
      </div>
      
      <div className="content container">
          <CriptoForm />
          <CriptoDetailsDisplay />
      </div>

      <ToastContainer />
    </>
  )
}

export default App
