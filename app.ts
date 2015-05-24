/**
 * Created by benjamindobler on 18.05.15.
 */

/// <reference path="typings/angular2/angular2.d.ts" />


import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: './app.html'
})


// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Benjamin';
    }
}


bootstrap(MyAppComponent);