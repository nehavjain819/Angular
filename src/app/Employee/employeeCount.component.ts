import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Stream } from "stream";

@Component({
    selector: 'employeeCount',
    templateUrl:'app/Employee/employeeCount.component.html'
})
export class EmployeeCountComponent{

    selectedRadiobuttonvalue : string = 'all'



    @Input()
    all : number;
    @Input()
    female : number;
    @Input()
    male : number;

@Output()
changedSelectionRadiobutton : EventEmitter<String> = new EventEmitter<string>();


OnchangedSelectionRadiobutton() {
    this.changedSelectionRadiobutton.emit(this.selectedRadiobuttonvalue);
    console.log(this.selectedRadiobuttonvalue);
}


}