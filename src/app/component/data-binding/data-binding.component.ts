// if we send data from html to ts or ts to html, one way data binding
// two way data bidning will be using forms
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

  // string, number, boolean, date
  // we want to bind the values of these vars in html 
  courseName: string = 'Angular 18';
  inputType = "checkbox";
  myClassName: string = 'bg-primary';
  rollNo: number = 123;
  currDate: Date = new Date();

  constructor() {
    // this.inputType=123; this will give error because it is string
  }

  changeCourse() {
    this.courseName = 'React JS';
    this.showAlert('course is changed');
  }
  showAlert(msg: string) {
    alert(msg);
  }
}
