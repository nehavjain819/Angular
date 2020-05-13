import {Component} from '@angular/core'
import { Employee } from './employee';

@Component({
    selector:'employee-list',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls:['app/Employee/employeeList.component.css']
})
export class EmployeeListComponent{
    EmployeeDetails : any[]
    selectedGendervalue : string = 'all'
    constructor(){
    this.EmployeeDetails = [
        {code: 'emp1', name:'neha', job:'UID' , ID: 23 , date: '2/2/2020' , gender: 'female'},

        {code: 'emp2', name:'Raunak', job:'N/W' , ID: 24 , date: '2/2/2020' , gender: 'male'},

        {code: 'emp3', name:'Rahul', job:'Dev' , ID: 25 , date: '2/2/2020' , gender: 'male'},

        {code: 'emp4', name:'Ankita', job:'Dev' , ID: 26 , date: '2/2/2020' , gender: 'female'},

        {code: 'emp5', name:'Utkarsha', job:'Home' , ID: 27 , date: '2/2/2020' , gender: 'female'},


    ]
}

getlist(){
    this.EmployeeDetails = [
        {code: 'emp1', name:'neha', job:'UID' , ID: 23 , date: '2/2/2020' , gender: 'female'},

        {code: 'emp2', name:'Raunak', job:'N/W' , ID: 24 , date: '2/2/2020' , gender: 'male'},

        {code: 'emp3', name:'Rahul', job:'Dev' , ID: 25 , date: '2/2/2020' , gender: 'male'},

        {code: 'emp4', name:'Ankita', job:'Dev' , ID: 26 , date: '2/2/2020' , gender: 'female'},

        {code: 'emp5', name:'Utkarsha', job:'Home' , ID: 27 , date: '2/2/2020' , gender: 'female'},

        {code: 'emp6', name:'Anita', job:'Home' , ID: 28 , date: '2/2/2020' , gender: 'female'},
        {code: 'emp7', name:'Anita', job:'Home' , ID: 28 , date: '2/2/2020' , gender: 'female'},
        {code: 'emp8', name:'Anita', job:'Home' , ID: 28 , date: '2/2/2020' , gender: 'female'},
        {code: 'emp9', name:'Anita', job:'Home' , ID: 28, date: '2/2/2020' , gender: 'female'},


    ]
}
OnradiobuttonChangeview(selectedgenderis : string){
this.selectedGendervalue = selectedgenderis;
}
trackEmployeDetails(index : number , EmployeeDetails:any) : string {
return EmployeeDetails.code;
}
 
gettotalnumberEmployee() : number{
    return this.EmployeeDetails.length;
}
getmaleEmployeeCount() : number {
    return this.EmployeeDetails.filter(e => e.gender === 'male').length
}     
getfemaleEmployeeCount() : number {
    return this.EmployeeDetails.filter(e => e.gender === 'female').length
}   
}