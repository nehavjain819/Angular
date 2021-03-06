"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Employee = (function () {
    function Employee() {
        this.FirstName = 'Neha';
        this.name = 'Raunak';
        this.LastName = 'Jain';
        this.Age = 23;
        this.Gender = 'female';
        this.Work = 'student';
        this.isdisabled = true;
        this.colspans = 2;
        this.moreclassapply = 'italicclass boldclass';
        this.isboldclassapply = false;
        this.isbold = true;
        this.fontsize = 30;
        this.toggle = false;
    }
    // if want to bind more than one style in ts file then use function
    Employee.prototype.addstyle = function () {
        var styles = {
            'font-size.px': this.fontsize,
            'font-weight': this.isbold ? 'bold' : 'normal',
        };
        return styles;
    };
    Employee.prototype.onclick = function () {
        console.log("button click method works");
    };
    Employee.prototype.ToggleMethod = function () {
        this.toggle = !this.toggle;
    };
    return Employee;
}());
Employee = __decorate([
    core_1.Component({
        selector: 'employee',
        templateUrl: 'app/Employee/employee.html',
        styleUrls: ['app/Employee/employee.css']
    })
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map