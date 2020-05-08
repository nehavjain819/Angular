import { Component } from '@angular/core'

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
    Work: string = 'student';
    isdisabled: boolean = true;
    colspans: number = 2;
    moreclassapply: string = 'italicclass boldclass';
    isboldclassapply: boolean = false;
    isbold: boolean = true;
    fontsize:number = 30;
    // if want to bind more than one style in ts file then use function
    addstyle() {
        let styles = {
            'font-size' : this.fontsize,
            'font-weight' : this.isbold ? 'bold' : 'normal',
        }
        return styles;
    }
}