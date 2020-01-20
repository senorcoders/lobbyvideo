import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { IsLoginService } from '../is-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  fullName: FormControl;
  loginText: any = 'REGISTER';
  isValid: boolean = false;
  wrongData: boolean = false;
  regex:string='(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9_]).{8,20}$';

  constructor(private auth: AuthenticationService,
    private router: Router, private isLoginService: IsLoginService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }


  createFormControls() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('',[Validators.required, Validators.pattern(this.regex)]);
    this.fullName = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', Validators.required);
  }

    createForm() {
      this.registerForm = new FormGroup({
        email: this.email,
        password: this.password,
        fullName: this.fullName,
        confirmPassword: this.confirmPassword
      }, {
          updateOn: 'submit'
        });
    }

    register() {
      console.log(this.registerForm.value);
      if (this.registerForm.valid) {
        this.isValid = true;
        (this.registerForm.get('password').value != this.registerForm.get('confirmPassword').value ) ? this.registerForm.get('confirmPassword').setErrors( {MatchPassword: true} ) : this.sendData();

      } else {
        this.validateAllFormFields(this.registerForm);
      }
  
    }


    validateAllFormFields(formGroup: FormGroup) {
      console.log("invalido");
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }
  
    sendData() {
      this.loginText = 'Loading...';
      this.auth.save('api/v1/register', this.registerForm.value).subscribe(
        data => {
          console.log("Reg Res", data);
          this.auth.setLoginData(data);
          this.isLoginService.setLogin(true)
          this.redirectHome();
        
        },
        error => {
          console.log(error);
          this.showError(error.error);
          this.isValid = false;
          this.loginText = 'Register';
        }
      )
    }
  
    showError(e) {
      //this.toast.error(e,'Error',{positionClass:"toast-top-right"})
      this.wrongData = true;
    }
  
    redirectHome() {
      if (this.auth.isLogged()) {
  
        this.router.navigate(["/"]);
  
        this.isValid = false;
        this.loginText = 'REGISTER';
      }
    }
}
