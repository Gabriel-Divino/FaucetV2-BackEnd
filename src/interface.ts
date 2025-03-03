
export enum Status{

    OK = 'ok',
    ERROR = 'error'
}


export interface ApiResponse{
    status : Status;
    error? : string;
    data : any;
}