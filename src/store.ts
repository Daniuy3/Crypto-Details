import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CriptoCurrency, CriptoDetails, Pair } from "./types";
import { getCriptoDetails, getCriptos } from "./services/CryptoService";

type CryptoStore = {
    criptos: CriptoCurrency[],
    criptoDetails: CriptoDetails,
    fetchCripto: () => Promise<void>,
    fetchCriptoDetails: (pair: Pair) => Promise<void>,
    isloading: boolean
}
const initialDetails = {
    IMAGEURL: "",
    PRICE: "",
    HIGHDAY: "",
    LOWDAY: "",
    CHANGEPCT24HOUR: "",
    LASTUPDATE: ""
}
export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
    criptos : [],
    criptoDetails: initialDetails,
    isloading: false,
    fetchCripto: async () => {
       const criptos = await getCriptos();

       set({criptos});
       /* Uso set de esta manera porque no interesa el estado anterior
        pude haberlo hecho asi
        set((state) => ({...state, criptos})); que tomaria una copia del estado anteriory actualizatia el arreglo de criptos
       */
    },

    fetchCriptoDetails: async(pair) => {
        set({criptoDetails: initialDetails ,isloading: true});
        const criptoDetails = await getCriptoDetails(pair);
        set({criptoDetails, isloading: false});
    }
})))