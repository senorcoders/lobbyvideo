import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterCoeComponent } from './enter-coe/enter-coe.component';
import { MessageComponent } from './message/message.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ScenesComponent } from './scenes/scenes.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppMenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EnterCoeComponent,
    MessageComponent,
    PaymentComponent,
    ThanksComponent,
    ContactComponent,
    FaqComponent,
    ScenesComponent,
    AboutComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added

    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
