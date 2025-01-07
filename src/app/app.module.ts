import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './drivingSchool/login/login.component';
import { CreateAccountComponent } from './drivingSchool/create-account/create-account.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './drivingSchool/welcome-page/welcome-page.component';
import { CreatePasswordComponent } from './drivingSchool/create-password/create-password.component';
import { VerificationComponent } from './verification/verification.component';
import { OtpSuccessComponent } from './otp-success/otp-success.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { FooterComponent } from './drivingSchool/component/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { CreateCompanyComponent } from './drivingSchool/create-company/create-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    WelcomePageComponent,
    CreatePasswordComponent,
    VerificationComponent,
    OtpSuccessComponent,
    HomeComponent,
    TestingComponent,
    FooterComponent,
    ProfileComponent,
    UpdateSuccessComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
