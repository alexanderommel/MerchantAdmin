import {Product} from "../domain/Product";
import {ApiResponse} from "./ApiContracts";
import {Merchant} from "../domain/Merchant";


const SERVER_URL = "http://localhost:8080"
const API_URL = "/auth"
const BASE_URL = SERVER_URL + API_URL

export interface MerchantRegistrationForm{
    name: string
    email: string
    phoneNumber: string
    storeName: string
    address: string
    latitude: string
    longitude: string
    ruc: string
    password: string
}

export interface AuthenticationCredentials {
    email: string
    password: string
}

export abstract class AuthenticationApi{
    public static async register(form: MerchantRegistrationForm): Promise<ApiResponse<string>>{
        const options = {
            headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
            method: 'POST',
            body: JSON.stringify(form)
        }
        const url = BASE_URL + "/register"
        const response = await fetch(url,options)
        return await response.json()
    }

    public static async login(credentials: AuthenticationCredentials): Promise<ApiResponse<string>>{
        const options = {
            headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
            method: 'POST',
            body: JSON.stringify(credentials)
        }
        const url = BASE_URL + "/login"
        const response = await fetch(url,options)
        return await response.json()
    }
}