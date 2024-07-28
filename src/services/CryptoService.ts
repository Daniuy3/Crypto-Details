import axios from "axios";
import { CriptoDetailsSchema, CriptosResponseSchema } from "../schema/schema";
import { Pair } from "../types";

export async function getCriptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

    /* Hago la consulta */
    const {data : {Data}} = await axios(url);

    /* Valido la respuesta */
    const result = CriptosResponseSchema.safeParse(Data);

    /*  */
    if(result.success){
        return result.data;
    }
}
export async function getCriptoDetails({currency, criptoCurrency} : Pair){

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`;
                    /* Uso display porque viene en formato string */
    const {data : {DISPLAY}} = await axios(url);

    const data =  DISPLAY[criptoCurrency][currency];

    /* Valido el formato de la respuesta */
    const result = CriptoDetailsSchema.safeParse(data);

    if(result.success){
        return result.data;
    }
}