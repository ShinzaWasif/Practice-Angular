// component.ts is the most important file of a component

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./component/add-employee/add-employee.component";
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectiveComponent } from "./component/directive/directive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, DataBindingComponent, DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice-Angular';
}
