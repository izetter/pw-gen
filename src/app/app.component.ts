import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { // AppComponent is a class
    password = '';  // This line here is the EXACT equivalent of doing the following in vanilla JS: constructor(){this.password='';}

    onButtonClick() {
        this.password = 'MY PASSWORD!'  // In here, "this" is AppComponent. 
        // console.log('Button has been clicked');  // <<< Example used earlier to check things were working
    }

    // The function below would ALSO be requiered if we used [value]="getPassword()" in the html template...
    // getPassword() {
    //     return this.password;    
    // }

    getName() {
        return 'Isay';
    }

}
