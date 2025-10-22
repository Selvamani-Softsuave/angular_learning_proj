export class EmployeeModel {
    employeeId: number = 0;
    fullName: string = "";
    email: string = "";
    phone: string = "";
    gender: string = "";
    dateOfJoining: Date = new Date();
    employeeType: string = "";
    salary: number = 0;
    departmentName: string = "";
    designationName: string = "";
}
export interface EmployeeModelRequest {
    employeeId: number,
    fullName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfJoining: Date,
    employeeType: string,
    salary: number,
    departmentId: number,
    designationId: number,
}
//Login Models
export interface LoginRequestModelsd {
    emailId: string;
    password: string;
}

export interface ApiResponseModel<T> { // login response, create new user response
    message: string; 
    result: boolean;
    data: T;
}

export interface LogInDateResponseModel { 
    userId: number;
    emailId: string;
    token: string;
    refreshToken: string;
}
// User Models
export interface SearchUserResponsesModel {
    totalRecords: number;
    pageNumber: number;
    pageSize: number;
    data: User[];
}

export interface CreateNewUserRequestModel {
    userId: number;
    emailId: string;
    fullName: string;
    password: string;
}

export interface GetAllResponseModel {
    message: string;
    result: boolean;
    data: User[];
}
export interface User extends CreateNewUserRequestModel {
    userName: string | null;
    role: string | null;
    createdDate: string; // You can also use Date if you plan to convert
    projectName: string;
    refreshToken: string;
    refreshTokenExpiryTime: string;
}
