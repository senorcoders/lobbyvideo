import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-coe',
  templateUrl: './enter-coe.component.html',
  styleUrls: ['./enter-coe.component.sass']
})
export class EnterCoeComponent implements OnInit {
  codeForm: FormGroup;
  code: FormControl;
  email: FormControl;
  userID: any ;
  emailAdress:any;

  constructor(private rest: AuthenticationService,
    private router: Router) { }

  async ngOnInit() {
    this.getLogin();
    this.createFormControls();
    this.createForm();
    await this.getUser();
    this.setValues();
  }

  getLogin(){
   this.userID =  this.rest.getLoginData();
   console.log(this.userID);
  }

  createFormControls() {
    this.code = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.codeForm = new FormGroup({
      email: this.email,
      code: this.code
    });
  }

  getUser(){
    return new Promise((resolve, reject) => {
    this.rest.get('users/' +  this.userID['userid']).subscribe(data => {
      console.log('User', data);
      this.emailAdress = data['email'];
      resolve();
    })
  });

  }

  setValues(){
    console.log(this.emailAdress);
    this.codeForm.controls['email'].setValue(this.emailAdress);
  }

  send(){
    console.log(this.codeForm.value);

    if(this.codeForm.valid){
      this.setCode();
    }
  }

  setCode(){
    this.rest.send('api/v1/setcode', this.codeForm.value).subscribe(data => {
      console.log("setting code", data);
      this.router.navigate(["/set-video"]);

    })
  }

}
