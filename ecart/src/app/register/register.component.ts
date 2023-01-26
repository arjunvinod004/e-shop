import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  pswd="";
  mobilenum=""
// register
registerform=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  mobilenum:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
register(){
  console.log(this.registerform);

var username= this.registerform.value.uname;
var password = this.registerform.value.pswd;
var mobilenum= this.registerform.value.mobilenum;

if(this.registerform.valid){
  //console.log(this.registerform.get('uname')?.errors);
   this.api.register(username,password,mobilenum)
   .subscribe((result:any)=>{
     alert(result.message);
     this.router.navigateByUrl('login')
   })
  }else{
   alert('invalid form') 
  }
}
}
//   if(result){
//     alert('register successful')
//     this.router.navigateByUrl('login')
//   }
//   else{
//     alert('register failed')
//     this.router.navigateByUrl('../register')
//   }
// else{
//   alert('invalid form');
// }

