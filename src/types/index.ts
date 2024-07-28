
import { z } from "zod";
import { CriptoDetailsSchema, CriptoResponseSchema, CurrencySchema, pairSchema } from "../schema/schema";




/*             Para que infiera el type del schema que se creo en schema */
export type Currency = z.infer<typeof CurrencySchema>;

export type CriptoCurrency = z.infer<typeof CriptoResponseSchema>;

export type Pair = z.infer<typeof pairSchema>;

export type CriptoDetails = z.infer<typeof CriptoDetailsSchema>;