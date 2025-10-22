import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel, EmployeeModelRequest } from '../model/employee-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://api.freeprojectapi.com/api/EmployeeApp";
  url: string = this.baseUrl + "/GetEmployees";
  private emplyeeList$ = new BehaviorSubject<EmployeeModel[]>([]);
  employeeDetail$ = this.emplyeeList$.asObservable();
  // employeeList: EmployeeModel[] = [];
  private employee$ = new BehaviorSubject<EmployeeModel>({} as EmployeeModel);
  employee = this.employee$.asObservable();

  // private updateEmployee$ = new BehaviorSubject<EmployeeModelRequest>();
  // updateEmployee = this.updateEmployee$.asObservable();


  constructor(private http: HttpClient) { }

  // getEmployeeList() {
  //    this.http.get(this.url).subscribe({
  //     next: res =>{
  //       this.employeeList = res as EmployeeModel[];
  //       console.log(this.employeeList);
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //    });
  // }
  getEmployeeList() {
    this.http.get<EmployeeModel[]>(this.url).subscribe({
      next: (res) => {
        this.emplyeeList$.next(res);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getEmployeeById(id: number) {
     this.http.get<EmployeeModel>(this.baseUrl + "/GetEmployeeById/" + id)
     .subscribe({
      next: (res) => {
        this.employee$.next(res);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
     });
  }

  postEmployee(data: EmployeeModelRequest){
    this.http.post<EmployeeModel>(this.baseUrl + "/CreateEmployee", data)
    .subscribe({
      next: (res) => {
          this.employee$.next(res);
          console.log(res);
      }, 
      error: (err : any) => {
        console.log(err);
      }
    });
  }

  updateEmployee(id: number, data: EmployeeModelRequest){
    this.http.put<EmployeeModelRequest>(this.baseUrl + "/UpdateEmployee", data, {
      params: new HttpParams().set("id", id)
    }).subscribe({
      next: (res) => {
        
      },
      error: (res) => {
        console.log(res);
      }
    });
  }


}
