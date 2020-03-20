import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  userID: any ;
  emailAdress:any;
  currentVideo:any;
  constructor(private rest: AuthenticationService,
    private toastr: ToastrService) { }

  async ngOnInit() {
    this.getLogin();
    await this.getUser();
  }

  getLogin(){
    this.userID =  this.rest.getLoginData();
    console.log(this.userID);
   }

   

  getUser(){
    return new Promise((resolve, reject) => {
    this.rest.get('users/' +  this.userID['userid']).subscribe(data => {
      console.log('User', data);
      this.emailAdress = data['email'];
      this.currentVideo = data['video'];
      resolve();
    })
  });

  }

  setVideo(videoname){
    console.log("clicked");
    let data = {
      email: this.emailAdress,
      video: videoname
    }
    this.rest.save('api/v1/setVideo', data).subscribe(res => {
      console.log("Setting video", res);
      this.currentVideo = videoname;
      this.toastr.success('Sucess', 'Video has been added!');

    }, error => {
      this.toastr.error('Error', 'Error', {
        timeOut: 3000
      });
    });
  }

}
