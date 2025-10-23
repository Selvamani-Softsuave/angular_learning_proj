import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user-service';
import { DatePipe } from '@angular/common';
import { EmployeeModel, GetAllResponseModel, User } from '../../../core/model/employee-model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
  employeeList: EmployeeModel[] = [];
  userList: User[] = []; 
  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.employeeDetail$.subscribe((list) =>{
      this.employeeList = list;
    });
    this.userService.getEmployeeList();

    this.userService.users.subscribe((users) => {
      this.userList = users.data;
    });
    this.userService.getUserList();
  }
}
