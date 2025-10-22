import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user-service';
import { DatePipe } from '@angular/common';
import { EmployeeModel } from '../../../core/model/employee-model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
  employeeList: EmployeeModel[] = [];
  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.employeeDetail$.subscribe((list) =>{
      this.employeeList = list;
    });
    this.userService.getEmployeeList();
  }
}
