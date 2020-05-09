import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { // AppComponent is a class
    // So, the following variables are class properties!
    length: number = 0;
    includeLetters: boolean = false;
    includeNumbers: boolean = false;
    includeSymbols: boolean = false;
    password: string = '';  // This line here is the EXACT equivalent of doing the following in vanilla JS: constructor(){this.password='';}

    // And these are methods
    onChangeLength(numberEntered: string) {
        this.length = parseInt(numberEntered);
        console.log(length);    // Always prints 0 (zero) for some reason
    }

    onChangeIncludeLetters() {
        this.includeLetters = !this.includeLetters;    // Changes includeLetters to the opposite of whatever it is. In this case would be the same as doing: includeLetters = true; (boolean only of course)
    }

    onChangeIncludeNumbers() {
        this.includeNumbers = !this.includeNumbers;    
    }

    onChangeIncludeSymbols() {
        this.includeSymbols = !this.includeSymbols;    
    }

    onButtonClick() {
        // The following is a template literal, an ES6 feature.
        console.log(`
        A password with the following characteristics will be generated:
        Including letters: ${this.includeLetters}
        Including numbers: ${this.includeNumbers}
        Including symbols: ${this.includeSymbols}
        `)
        // console.log(this.includeLetters, this.includeNumbers, this.includeSymbols);
        this.password = 'MY PASSWORD!';  // In here, "this" is AppComponent. 
        // console.log('Button has been clicked');  // <<< Example used earlier to check things were working
    }

    // The method below would ALSO be requiered if we used [value]="getPassword()" in the html template...
    // getPassword() {
    //     return this.password;    
    // }

    getName() {
        return 'Isay';
    }

}
