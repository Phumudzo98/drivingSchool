import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../../service/login.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]]

    })
  }

  onSubmit()
  {
    if(this.loginForm.invalid)
    {
      alert("Please ensure all fields are complete")
      return;
    }

    this.loginService.loginUser(this.loginForm.value).subscribe(response=>
    {
      console.log("User has successfully logged in")
    }, error=>{
      console.log("Incorrect email/password")
    }
    )


  }

}
