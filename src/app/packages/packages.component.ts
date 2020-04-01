import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.sass']
})
export class PackagesComponent implements OnInit {

  basicPrice: number = 39;
  deluxePrice: number = 59;
  superPrice: number = 79;
  priceType: any = "mo";
  constructor() {

   }

  ngOnInit() {

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
}
