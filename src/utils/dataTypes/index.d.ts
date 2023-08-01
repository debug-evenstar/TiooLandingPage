export interface BaseResult {
    error: boolean
    message: string
    response?: string
    action?:string
}

export interface ErrorResult {
    success: boolean;
    message: string;
    [key: string]: any;
}