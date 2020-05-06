import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>
        {{name}}
    </h1>
    <employee></employee>
        ` ,
})
export class AppComponent { name: string = 'Employee Detail'; }
