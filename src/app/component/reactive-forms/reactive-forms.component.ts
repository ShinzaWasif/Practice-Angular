import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  // this type of declaration (which is diff from template forms) is used in Reactive Forms
  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  });

  allUsers: any[] = [];

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.allUsers = res;
    });
  }

  onEdit(id: number) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + id).subscribe((res: any) => {
      this.userForm = new FormGroup({
        id: new FormControl(res.id),
        name: new FormControl(res.name),
        username: new FormControl(res.username),
        email: new FormControl(res.email)
      });
    });
  }
  onClickBtn() {
    debugger;
    const obj = this.userForm.value;
    this.http.post('https://jsonplaceholder.typicode.com/users', obj).subscribe((res: any) => {
      alert('User created.');
    });
  }
}
