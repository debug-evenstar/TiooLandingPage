export interface BaseResult {
    error: boolean
    message: string
    response?: string
}

export interface ErrorResult {
    success: boolean;
    message: string;
    [key: string]: any;
}