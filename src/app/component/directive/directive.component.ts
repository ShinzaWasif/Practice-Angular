import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// in ts/js false values are: false, '', null, undefined, 0
//if you want to use any directive you have to import modules due to standalone components
@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  //ngIf
  isDiv1Visible: boolean = true;
  toggle: boolean = true;
  num1: string = '';
  num2: string = '';
  //ngFor
  users = ['Shinza', 'Zainab', 'Ayesha', 'Areeba', 'Hafsah'];
  userDetails = [
    {
      name: 'Shinza',
      id: 104,
      email: 'shinzawasif123@gmail.com'
    },
    {
      name: 'Zainab',
      id: 101,
      email: 'zainab245@gmail.com'
    }, {
      name: 'Ayesha',
      id: 111,
      email: 'ayeshahere@gmail.com'
    }, {
      name: 'Areeba',
      id: 102,
      email: 'areeba@gmail.com'
    }
  ];

  //ngSwitch
  divNum: string = '';

  //ngClass
  searchText: string = '';

  //router dependency injection
  constructor(private router: Router) {

  }

  HideDiv1() {
    this.isDiv1Visible = false;
  }

  ShowDiv1() {
    this.isDiv1Visible = true;
  }

  Toggle() {
    this.toggle = !this.toggle;
  }

  showDiv1() {
    this.divNum = 'one';
  }

  showDiv2() {
    this.divNum = 'two';
  }

  showDiv3() {
    this.divNum = 'three';
  }

  gotoAddEmp() {
    this.router.navigateByUrl("add-emp")
  }
}
