import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { Directive } from '@angular/core';
import { PrimeNGUse } from './component/prime-nguse/prime-nguse.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { DirectiveComponent } from './component/directive/directive.component';

export const routes: Routes = [
    // route objects
    // class names in componenet
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directive',
        component: DirectiveComponent
    },
    {
        path: 'PrimeNG',
        component: PrimeNGUse
    },
    {
        path: 'ReactiveForms',
        component: ReactiveFormsComponent
    }
];
