import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  inSubmission:boolean=false;
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  employee_id=new FormControl('',[
    Validators.required,
    Validators.minLength(7)
  ]);
  gender=new FormControl('',[
    Validators.required
  ]);
  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(10)
  ]
  );
  age = new FormControl<number|null>(null,[
    Validators.required,
    Validators.min(18),
    Validators.max(50)
  ]);
  password = new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirm_password = new FormControl('',[
    Validators.required,
  ]);
  
  registerForm=new FormGroup(
      {
        name:this.name,
        email:this.email,
        employee_id:this.employee_id,
        gender:this.gender,
        phoneNumber:this.phoneNumber,
        age:this.age,
        password:this.password,
        confirm_password:this.confirm_password
      }
    );

    register(event:Event){
      event.preventDefault()
      console.log(this.registerForm.value);
    }
   
}
