import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './drivingSchool/login/login.component';
import { CreateAccountComponent } from './drivingSchool/create-account/create-account.component';
import { WelcomePageComponent } from './drivingSchool/welcome-page/welcome-page.component';
import { CreatePasswordComponent } from './drivingSchool/create-password/create-password.component';
import { VerificationComponent } from './verification/verification.component';
import { OtpSuccessComponent } from './otp-success/otp-success.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { CreateCompanyComponent } from './drivingSchool/create-company/create-company.component';

const routes: Routes = [
  {path:'', redirectTo: "/login", pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'createAccount', component:CreateAccountComponent},
  {path:'welcome', component:WelcomePageComponent},
  {path:'createPassword', component:CreatePasswordComponent},
  {path:'verification', component:VerificationComponent},
  {path:'otp-success', component:OtpSuccessComponent},
  {path:'home', component:HomeComponent},
  {path:'test', component:TestingComponent},
  {path:'profile', component:ProfileComponent},
  {path:'update-success', component:UpdateSuccessComponent},
  {path:'create-company',component:CreateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
