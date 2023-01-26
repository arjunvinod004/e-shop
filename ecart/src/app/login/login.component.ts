import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname="";
pswd="";
  // login

loginform=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],

})
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    var uname=this.loginform.value.uname;
    var pswd=this.loginform.value.pswd;
    //var userDetails=this.api.userDetails;
    if(this.loginform.valid){
      console.log(this.loginform.get('uname')?.errors);
       this.api.login(uname,pswd)
       .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('products')
       },
       result=>{
        alert(result.error.message)
       }
       )
      }

    }
  }
    //   if(result){
    //     alert('login successful')
    //     this.router.navigateByUrl('')
    //   }
    //   else{
    //     alert('login failed')
    //     this.router.navigateByUrl('../login')
    //   }
    // else{
    //   alert('invalid form');
    // }
 
