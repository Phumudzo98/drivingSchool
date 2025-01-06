import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { error, log } from 'console';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit{

  createAccountForm!:FormGroup;
  selectedFile!: File;

  constructor(private fb: FormBuilder, private service: LoginService){}


  ngOnInit(): void {
    this.createAccountForm= this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      citizenship:['', [Validators.required]],
      idNumber:['', [Validators.required]],
      phoneNumber:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      streetName:['', [Validators.required]],
      town:['', [Validators.required]],
      province:['', [Validators.required]],
      postalCode:['', [Validators.required]],
      password:['', [Validators.required,  Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]],
      gender:['', [Validators.required]],
      race:['', [Validators.required]],
      disability:['', [Validators.required]],
      agentReferral:['', [Validators.required]],
     
    })
    
  }

  onSubmit()
  {
    if(this.createAccountForm.invalid)
    {
      alert("Please fill all missing fields");
      return;
    }

    this.service.createAccount(this.createAccountForm.value).subscribe(response=>{
      console.log(response);
    },error=>
    {
      console.log("User account exist", error)
    })

    
  }


}
