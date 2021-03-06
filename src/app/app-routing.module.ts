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
import { ThanksComponent } from './thanks/thanks.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ScenesComponent } from './scenes/scenes.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { UnloggedinService } from './unloggedin.service';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { 
    path: '', component: HomeComponent,

  },
  { 
    path: 'login', component: LoginComponent,

  },
  { 
    path: 'faq', component: FaqComponent,

  },
  { 
    path: 'scenes', component: ScenesComponent,

  },
  { 
    path: 'register', component: PackagesComponent,
    canActivate: [UnloggedinService]


  },
  { 
    path: 'process-register', component: RegisterComponent,
    canActivate: [UnloggedinService]


  },
  { 
    path: 'about', component: AboutComponent,

  },
  { 
    path: 'dashboard', component: DashboardComponent,
    canActivate: [LoggedinService]

  },
  { 
    path: 'enter-code', component: EnterCoeComponent,
    canActivate: [LoggedinService]

  },
  { 
    path: 'set-video', component: MessageComponent,
    canActivate: [LoggedinService]

  },
  {
    path: 'payment', component: PaymentComponent,
    canActivate: [LoggedinService]

  },
  {
    path: 'thanks', component: ThanksComponent,
    canActivate: [LoggedinService]

  },
  {
    path: 'contact', component: ContactComponent,

  },
  {
    path: 'privacy', component: PrivacyComponent,
  },
  {
    path: 'terms', component: TermsComponent,
  },
  {
    path: 'products', component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
