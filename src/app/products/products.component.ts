import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  private httpClient: HttpClient;
  products:any = [];
  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);

   }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get('https://bestbuy.patientsoothe.com/products').subscribe(data => {
      console.log("products", data);
      this.products = data['products'];
    })
  }

}
