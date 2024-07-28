import { useState } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import { toast } from "react-toastify";
import { Pair } from "../types";


function CriptoForm() {

    const { criptos, fetchCriptoDetails} = useCriptoStore();
    
    const [pair, setPair] = useState<Pair>({
        currency: "",
        criptoCurrency: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e :React.MouseEvent<HTMLInputElement, MouseEvent>){
        e.preventDefault();
        /* 
            Otra forma de validar el formulario
            if(Object.values(pair).includes("")){
        */
        if(pair.currency === "" || pair.criptoCurrency === ""){
            toast("Todos los campos son obligatorios", {type: "error", autoClose: 2000});
            return;
        }
        fetchCriptoDetails(pair);
    }
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
                onChange={handleChange}
            >
                <option value="" disabled selected>-- Seleccione --</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                        {currency.name}    
                    </option>
                ))}
            </select>
        </div>
        
        <div className="field">
            <label htmlFor="criptoCurrency">Criptomoneda:</label>
            <select 
                name="criptoCurrency" 
                id="criptoCurrency"
                onChange={handleChange}
            >
                <option value="" disabled selected>-- Seleccione --</option>
                {criptos.map(cripto => (
                  <option
                    key={cripto.CoinInfo.Name}
                    value={cripto.CoinInfo.Name}
                  >
                    {cripto.CoinInfo.FullName}
                  </option> 
                ))}
            </select>
        </div>
        
        <input type="submit" value="Cotizar" onClick={handleSubmit} />
    </form>
  )
}

export default CriptoForm