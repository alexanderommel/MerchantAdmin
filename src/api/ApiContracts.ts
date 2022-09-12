export interface ApiResponse<T>{
    success: boolean
    payload?: Payload<T>
    error?: ResponseError
}

export interface ResponseError{
    httpCode: number
    message: string
}

export interface Payload<T>{
    payloadType: String
    data: T
}