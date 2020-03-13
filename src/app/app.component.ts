import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'lobbyvideo';

  onActivate(e, outlet) {
    outlet.scrollTop = 0;
    window.scrollTo(0, 0);
  }

}
