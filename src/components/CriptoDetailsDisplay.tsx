import { useMemo } from "react"
import { useCriptoStore } from "../store"
import { SpinnerRoundFilled } from "spinners-react"

function CriptoDetailsDisplay() {
    const { criptoDetails, isloading } = useCriptoStore()
    const isEmpty = useMemo(() => Object.values(criptoDetails).includes(""), [criptoDetails])

  return (
    <div className="result-container">
        {!isEmpty && (
           <>
                <h2>Cotizacion</h2>
                <div className="result">
                    <img src={`https://cryptocompare.com/${criptoDetails.IMAGEURL}`} alt="Imagen Cryptomoneda" />
                    <div>
                        <p>El precio es: <span>{criptoDetails.PRICE}</span></p>
                        <p>Precio mas alto del dia: <span>{criptoDetails.HIGHDAY}</span></p>
                        <p>Precio mas bajo del dia: <span>{criptoDetails.LOWDAY}</span></p>
                        <p>Variacion ultimas 24 horas: <span>{criptoDetails.CHANGEPCT24HOUR}</span></p>
                        <p>Ultima actualizacion: <span>{criptoDetails.LASTUPDATE}</span></p>
                    </div>
                </div>
           </>
        )}
        {isloading && <SpinnerRoundFilled size={50} thickness={100} speed={100} color="rgba(57, 91, 172, 1)" />}
    </div>
  )
}

export default CriptoDetailsDisplay