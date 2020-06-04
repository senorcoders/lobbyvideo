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
    this.httpClient.get('http://159.65.226.13:8100/products').subscribe(data => {
      console.log("products", data);
      this.products = data['products'];
    })
  }

}
