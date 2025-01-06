import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './drivingSchool/login/login.component';
import { CreateAccountComponent } from './drivingSchool/create-account/create-account.component';
import { WelcomePageComponent } from './drivingSchool/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'', redirectTo: "/login", pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'createAccount', component:CreateAccountComponent},
  {path:'welcome', component:WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
