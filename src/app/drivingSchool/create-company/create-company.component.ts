import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss'
})
export class CreateCompanyComponent {

  
    
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

}
