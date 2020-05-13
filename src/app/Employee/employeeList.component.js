"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.selectedGendervalue = 'all';
        this.EmployeeDetails = [
            { code: 'emp1', name: 'neha', job: 'UID', ID: 23, date: '2/2/2020', gender: 'female' },
            { code: 'emp2', name: 'Raunak', job: 'N/W', ID: 24, date: '2/2/2020', gender: 'male' },
            { code: 'emp3', name: 'Rahul', job: 'Dev', ID: 25, date: '2/2/2020', gender: 'male' },
            { code: 'emp4', name: 'Ankita', job: 'Dev', ID: 26, date: '2/2/2020', gender: 'female' },
            { code: 'emp5', name: 'Utkarsha', job: 'Home', ID: 27, date: '2/2/2020', gender: 'female' },
        ];
    }
    EmployeeListComponent.prototype.getlist = function () {
        this.EmployeeDetails = [
            { code: 'emp1', name: 'neha', job: 'UID', ID: 23, date: '2/2/2020', gender: 'female' },
            { code: 'emp2', name: 'Raunak', job: 'N/W', ID: 24, date: '2/2/2020', gender: 'male' },
            { code: 'emp3', name: 'Rahul', job: 'Dev', ID: 25, date: '2/2/2020', gender: 'male' },
            { code: 'emp4', name: 'Ankita', job: 'Dev', ID: 26, date: '2/2/2020', gender: 'female' },
            { code: 'emp5', name: 'Utkarsha', job: 'Home', ID: 27, date: '2/2/2020', gender: 'female' },
            { code: 'emp6', name: 'Anita', job: 'Home', ID: 28, date: '2/2/2020', gender: 'female' },
            { code: 'emp7', name: 'Anita', job: 'Home', ID: 28, date: '2/2/2020', gender: 'female' },
            { code: 'emp8', name: 'Anita', job: 'Home', ID: 28, date: '2/2/2020', gender: 'female' },
            { code: 'emp9', name: 'Anita', job: 'Home', ID: 28, date: '2/2/2020', gender: 'female' },
        ];
    };
    EmployeeListComponent.prototype.OnradiobuttonChangeview = function (selectedgenderis) {
        this.selectedGendervalue = selectedgenderis;
    };
    EmployeeListComponent.prototype.trackEmployeDetails = function (index, EmployeeDetails) {
        return EmployeeDetails.code;
    };
    EmployeeListComponent.prototype.gettotalnumberEmployee = function () {
        return this.EmployeeDetails.length;
    };
    EmployeeListComponent.prototype.getmaleEmployeeCount = function () {
        return this.EmployeeDetails.filter(function (e) { return e.gender === 'male'; }).length;
    };
    EmployeeListComponent.prototype.getfemaleEmployeeCount = function () {
        return this.EmployeeDetails.filter(function (e) { return e.gender === 'female'; }).length;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/Employee/employeeList.component.html',
        styleUrls: ['app/Employee/employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map