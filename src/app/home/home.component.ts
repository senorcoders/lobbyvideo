import { Component, OnInit } from '@angular/core';
declare var jQuery;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { 

    jQuery(document).ready(function() {

  
      jQuery('[data-toggle="collapse"]').click(function() {
        jQuery(this).toggleClass( "active" );
        if (jQuery(this).hasClass("active")) {
          jQuery(this).text("Read less");
        } else {
          jQuery(this).text("Read more");
        }
      });
        
        
      // document ready  
      });
  }

  ngOnInit() {
   
  }

}
