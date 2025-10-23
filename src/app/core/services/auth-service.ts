import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiResponseModel, CreateNewUserRequestModel, EmployeeModel, LogInDateResponseModel } from '../model/employee-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){}

  baseUrl: string = "https://api.freeprojectapi.com/api/UserApp";
  logInUrl: string = this.baseUrl + "/login";
  
  logIn(request: any ): Observable<ApiResponseModel<LogInDateResponseModel>> {
    debugger;
    return this.http.post<ApiResponseModel<LogInDateResponseModel>>(this.logInUrl, request, {headers: {'Content-Type': 'application/json'}});
  }

  register(request: any): Observable<ApiResponseModel<CreateNewUserRequestModel>> {
    debugger;
    const registerUrl = this.baseUrl + "/CreateNewUser";
    return this.http.post<ApiResponseModel<CreateNewUserRequestModel>>(registerUrl, request, {headers: {'Content-Type': 'application/json'}});
  }

  
}
