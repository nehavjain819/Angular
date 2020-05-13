import { Component } from '@angular/core'
import { Stream } from 'stream';

@Component({
    selector: 'employee',
    templateUrl: 'app/Employee/employee.html',
    styleUrls: ['app/Employee/employee.css']
})


export class Employee {
    FirstName: string = 'Neha';
    name:String = 'Raunak';
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
    toggle : boolean= false;
    // if want to bind more than one style in ts file then use function
    addstyle() {
        let styles = {
            'font-size.px' : this.fontsize,
            'font-weight' : this.isbold ? 'bold' : 'normal',
        }
        return styles;
    }
    onclick(){
        console.log("button click method works")
    }
    ToggleMethod(){
        this.toggle=!this.toggle;
    }
}