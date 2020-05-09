import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent { // AppComponent is a class
    // So, the following variables are actually class properties!
    passwordLength = 0;
    includeLetters = false;
    includeNumbers = false;
    includeSymbols = false;
    password = '';  // This line here is the EXACT equivalent of doing the following in vanilla JS: constructor(){this.password='';}

    // And these are methods
    onChangeLength(numberEntered: string) {
        this.passwordLength = parseInt(numberEntered);
    }

    onChangeIncludeLetters() {
        this.includeLetters = !this.includeLetters;    // Changes includeLetters to the boolean opposite of whatever it is. It would NOT WORK if we did: includeLetters = true; beacuse then everytime we checked or unchecked the box, includeLetters would be set to true !!
    }

    onChangeIncludeNumbers() {
        this.includeNumbers = !this.includeNumbers;
    }

    onChangeIncludeSymbols() {
        this.includeSymbols = !this.includeSymbols;
    }

    onButtonClick() {
        let validChars = '';
        let generatedPassword = '';

        if(this.includeLetters) {
            validChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if(this.includeNumbers) {
            validChars += '0123456789'
        }

        if (this.includeSymbols) {
            validChars += '!#$%&?¡¿'
        }

        for (let i = 0; i < this.passwordLength; i++) {
            let index = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[index];
        }

        this.password = generatedPassword;
    }

    // getName() {
    //     return 'Isay';
    // }

}



// NOTES:


/* 

To enable/disable the button from this TypeScript file instead of directly from within the HTML you would do the
following:

1. Specify the HTML disabled attribute (vanilla syntax) into the button element in the HTML template file:

    <button disabled>....

2. Crete a method like this:

    buttonEnabler() {
        if (!(this.passwordLength && (this.includeLetters || this.includeNumbers || this.includeSymbols))) {
            document.querySelector('button').disabled = true;
        } else {
            document.querySelector('button').disabled = false;
        }
    }

3. Call that method in EVERY other relevant method, e.g:

    onChangeIncludeNumbers() {
        this.includeNumbers = !this.includeNumbers;
        this.buttonEnabler();
    }


It works, but as you can see is much more cumbersome and long...

Maybe there's less cumbersome way to do this with ngIf ?¿

*/


/* 

The following was previously used inside the method onChangeLength() to do a very basic validation in case there were
charachters different than numbers in numbersEntered. It was removed becasue by changing the <input> type to "number",
it now allos only numbers.

    const parsedValue = parseInt(numberEntered);
    if (!isNaN(parsedValue)) {                          << Notice the not operand "!" before isNaN
        this.passwordLength = parsedValue;
    }

However... minus signs are still allowed and their presence prevents the program to function as intended. The following
was tried but for some reason the hyphen is not matched by the regex.

    if (/[-]/.test(numberEntered)) {}

*/


/* 

The various testing code lines below are from the beginning of the project and were inside the onButtonClick() method.

        // The following is a template literal, an ES6 feature.
        console.log(`
        A password with the following characteristics will be generated:
        Including letters: ${this.includeLetters}
        Including numbers: ${this.includeNumbers}
        Including symbols: ${this.includeSymbols}
        `)

        // console.log(this.includeLetters, this.includeNumbers, this.includeSymbols);
        // this.password = 'MY PASSWORD!';  // In here, "this" is AppComponent. 
        // console.log('Button has been clicked');  // <<< Example used earlier to check things were working
    }

    // The method below would ALSO be requiered if we used [value]="getPassword()" in the html template...
    // getPassword() {
    //     return this.password;    
    // }

*/