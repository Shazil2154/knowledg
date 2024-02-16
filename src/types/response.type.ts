interface SuccessRespone<T> {
 status: number
 message: string
 data: T
}

interface ErrorResponse{
    status: number
    error: string
}

export type IRespone<T> = SuccessRespone<T> | ErrorResponse