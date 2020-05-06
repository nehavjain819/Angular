import {Component} from '@angular/core' 

@Component({
    selector: 'employee',
    templateUrl: 'app/Employee/employee.html'
})


export class Employee {
    FirstName: string = 'Neha';
    LastName: string = 'Jain';
    Age: Number = 23;
    Gender: string = 'female';

}