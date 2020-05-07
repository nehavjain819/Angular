import {Component} from '@angular/core' 

@Component({
    selector: 'employee',
    templateUrl: 'app/Employee/employee.html',
    styleUrls: ['app/Employee/employee.css']
})


export class Employee {
    FirstName: string = 'Neha';
    LastName: string = 'Jain';
    Age: Number = 23;
    Gender: string = 'female';
    Work:string='student';
    isdisabled:boolean = true;
    colspans:number=2;
    moreclassapply: string='italicclass boldclass';
    isboldclassapply:boolean=false;
}