import {AbstractControl} from '@angular/forms';
export class CustomValidators {
  static matchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirm').value;

    if(password != confirmPassword) {
      AC.get('confirm').setErrors( {matchpassword: true} )
    } else {
      return null
    }
  }
}
