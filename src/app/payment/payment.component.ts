import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  handler:any = null;

  constructor() { }

 

  ngOnInit(){
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


pay(amount) {    
 
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_c6dJNx2AZjTBCKVapblc4b52',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log("Token created", token)
      // alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Patient Soothe',
    description: 'Lobby Video',
    amount: amount * 100
  });

}

}
