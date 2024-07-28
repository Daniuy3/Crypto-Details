import {z} from 'zod';

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
});

export const CriptoResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string(),
    }),
})

export const CriptosResponseSchema = z.array(CriptoResponseSchema);

export const pairSchema = z.object({
    currency: z.string(),
    criptoCurrency: z.string(),
});

export const CriptoDetailsSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
});