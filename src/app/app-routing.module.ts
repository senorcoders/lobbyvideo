import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedinService } from './loggedin.service';
import { EnterCoeComponent } from './enter-coe/enter-coe.component';
import { MessageComponent } from './message/message.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { 
    path: '', component: HomeComponent,

  },
  { 
    path: 'login', component: LoginComponent,

  },
  { 
    path: 'register', component: RegisterComponent,

  },
  { 
    path: 'dashboard', component: DashboardComponent

  },
  { 
    path: 'enter-code', component: EnterCoeComponent

  },
  { 
    path: 'set-video', component: MessageComponent

  },
  {
    path: 'payment', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
