import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IsLoginService } from '../is-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  handler:any = null;
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  fullName: FormControl;
  loginText: any = 'REGISTER';
  isValid: boolean = false;
  wrongData: boolean = false;
  regex:string='(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9_]).{8,20}$';
  package:any = 'usual';
  packageTime:any = 'mo';
  price: any = '39';
  basicPrice: number = 39;
  deluxePrice: number = 59;
  superPrice: number = 79;
  priceType: any = "mo";

  constructor(private auth: AuthenticationService,
    private router: Router, private isLoginService: IsLoginService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.package = params['package'];
        this.packageTime = params['time'];
        if(this.package == 'usual'){
          this.price = 39;
        }else if(this.package == 'popular'){
          this.price = 59;
        }else if(this.package == 'free'){
          this.price = 0;
        }else{
          this.price = 79;

        }
        if (this.packageTime == "yr"){
          this.price = this.price*10;
        }
    });
     }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.loadStripe();
  }

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }

    
}

changePrices(billType){
  //this.priceType = "yr";
  if (billType == 'annual'){
    this.priceType = "yr";
    this.basicPrice = 390;
    this.deluxePrice = 590;
    this.superPrice = 790;
  } else {
    this.priceType = "mo";
    this.basicPrice = 39;
    this.deluxePrice = 59;
    this.superPrice = 79;
  }
}

pay(amount) {    
 
  let that = this;
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_c6dJNx2AZjTBCKVapblc4b52',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log("Token created", token)
      // alert('Token Created!!');
      that.sendData();
    }
  });

  handler.open({
    name: 'Patient Soothe',
    description: 'Lobby Video',
    amount: amount * 100
  });

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
        (this.registerForm.get('password').value != this.registerForm.get('confirmPassword').value ) ? this.registerForm.get('confirmPassword').setErrors( {MatchPassword: true} ) : this.pay(this.price);

      } else {
        this.validateAllFormFields(this.registerForm);
      }
      // this.sendData();
  
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
          if(data.hasOwnProperty('message')){
            this.showError("Already an user");
          this.isValid = false;
          this.loginText = 'Register';

          }else{
            this.auth.setLoginData(data);
            this.isLoginService.setLogin(true)
            this.redirectHome();
          }
      
        
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
  
    async redirectHome() {
      if (this.auth.isLogged()) {
        this.sendNotification();
        this.router.navigate(["/thanks"]);
  
        this.isValid = false;
        this.loginText = 'REGISTER';
      }
    }


    sendNotification(){
      let data = {"name": this.registerForm.get('fullName').value, "template_name": "welcome", "package": this.package, "email": this.registerForm.get('email').value}
      return new Promise((resolve, reject) => {
        this.auth.save('email/send/welcome', data).subscribe(res => {
          resolve();
        }, error => reject())
      });

      }
}
