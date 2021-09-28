import { Component, OnInit } from '@angular/core';
import { IUser } from './user.inteface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public login: string = '';
  public email: string = '';
  public password: string = '';
  public arrUser: Array<any> = [];
  public loginVal: any;
  public passwordVal: any;
  public emailVal: any;
  public classAddUser = { 'addUserDisplay': false };
  public classEditUser = { 'editUserDisplay': false };
  public UserIndex: any;
  constructor() { }
  ngOnInit(): void {
  }
  addUser(): void {
    let User: IUser = {
      id: this.arrUser.length,
      login: this.login,
      password: this.password,
      email: this.email
    }
    this.arrUser.push(User);
    this.login = '';
    this.email = '';
    this.password = '';
  }
  deleteUser(event: number): void {
    this.arrUser.forEach(elem => {
      if (event == elem.id) {
        let ind = this.arrUser.findIndex(el => el.id == event);
        this.arrUser.splice(ind, 1)
      }
    })
  }
  editUser(event: number): void {
    this.arrUser.forEach(elem => {
      if (event == elem.id) {
        let ind = this.arrUser.findIndex(el => el.id == event);
        this.login = elem.login;
        this.password = elem.password;
        this.email = elem.email;
        this.classAddUser = { 'addUserDisplay': true };
        this.classEditUser = { 'editUserDisplay': true };
        this.UserIndex = ind
      }
    })
  }
  saveEditUser() {
    let newUser = {
      id: this.arrUser.length,
      login: this.login,
      password: this.password,
      email: this.email
    }
    this.arrUser.splice(this.UserIndex, 1, newUser);
    this.classAddUser = { 'addUserDisplay': false };
    this.classEditUser = { 'editUserDisplay': false };
    this.login = '';
    this.email = '';
    this.password = '';
  }

}
