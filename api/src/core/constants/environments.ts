import { config } from 'dotenv';
config();

export const DB_HOST: string = process.env.DB_HOST ?? "localhost"
export const DB_PORT: number = Number(process.env.DB_PORT ?? 5432);
export const DB_USER: string = process.env.DB_USER ?? "ecoleta"
export const DB_PASSWORD: string = String(process.env.DB_PASSWORD)
export const DB_DATABASE: string = process.env.DB_DATABASE ?? "ecoleta";

export const API_URL = process.env.API_URL;