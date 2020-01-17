import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { IsLoginService } from '../is-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  loginText: any = 'LOGIN';
  isValid: boolean = false;
  wrongData: boolean = false;

  constructor(private auth: AuthenticationService, private isLoginService: IsLoginService,
    private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    }, {
        updateOn: 'submit'
      });
  }

  login() {
    if (this.loginForm.valid) {
      this.isValid = true;
      this.sendDataLogin();
    } else {
      this.validateAllFormFields(this.loginForm);
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

  sendDataLogin() {
    this.loginText = 'Loading...';
    this.auth.login(this.loginForm.value).subscribe(
      data => {
        console.log("Login Res", data);
        this.auth.setLoginData(data);
        this.isLoginService.setLogin(true)
        this.redirectHome();
      
      },
      error => {
        console.log(error);
        this.showError(error.error);
        this.isValid = false;
        this.loginText = 'Login';
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
      this.loginText = 'LOGIN';
    }
  }

}
