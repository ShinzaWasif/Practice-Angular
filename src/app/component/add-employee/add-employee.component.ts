// this is a new component created after making a folder and opening in itegrated terminal using 
// ng generate component <component-name>
import { Component } from '@angular/core';

// component decorator
// selector is unique identifier of component
// standalone means independent component
// template: '<h1>Employee</h1>' -- another way of using templateUrl.
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
})

// import this anywhere to use it
export class AddEmployeeComponent {

}
