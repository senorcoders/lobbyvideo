import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  handler:any = null;
  basicPrice: number = 39;
  deluxePrice: number = 59;
  superPrice: number = 79;
  priceType: any = "mo";
  constructor( private router: Router) { }

 

  ngOnInit(){
    this.loadStripe();

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

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
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
      that.router.navigate(["/thanks"]);

    }
  });

  handler.open({
    name: 'Patient Soothe',
    description: 'Lobby Video',
    amount: amount * 100
  });

}

}
