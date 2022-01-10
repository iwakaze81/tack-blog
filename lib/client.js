import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'tack-blog',
    apiKey: process.env.MICROCMS_API_KEY,
})