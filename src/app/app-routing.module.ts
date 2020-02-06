import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedinService } from './loggedin.service';
import { EnterCoeComponent } from './enter-coe/enter-coe.component';


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
    path: 'dashboard', component: EnterCoeComponent

  },
  { 
    path: 'enter-code', component: EnterCoeComponent

  },
  { 
    path: 'set-video', component: DashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
