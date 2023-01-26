import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // currentuser
  currentUser="";
 
searchkey=new BehaviorSubject('')
// to share sream of data
  constructor(private http:HttpClient) { }
  userDetails:any={
  
    akhil:{username:'akhil',password:4000,mobilenumber:'7510949135'},
    vishnu:{username:'vishnu',password:4001, mobilenumber:'8086373858'},
    sarath:{username:'sarath',password:4002, mobilenumber:'8281637035'}
  }
  register(username:any,password:any,mobilenum:any){
    const data={
      username,
      password,
      mobilenum
    }
    return this.http.post('http://localhost:3000/register/',data)
  }
    // let userDetails = this.userDetails
    // if(uname in userDetails){
    //   return false;
    // }
    // else{
    //   userDetails[uname]={
    //     uname:uname,
    //     password:password,
    //     mobilenum:mobilenum
    //   }
    //   console.log(userDetails);
     
    //    return true;
    // }
    
 
  login(uname:any,pswd:any){
    const data={
      uname,
      pswd
    }
    return this.http.post('http://localhost:3000/login/',data)
  }

    // let userDetails=this.userDetails
    // if(uname in userDetails){
    //   if(pswd==userDetails[uname]['password']){
    //     this.currentUser=userDetails[uname]['password']
       
    //    return true;
    //   }
    //   else{
    //     return false;
    //   }
      
    // } 
    // else{
    //   return false;
    // }
  getproducts(){
    return this.http.get('http://localhost:3000/all-products')
  }
  // add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      images:product.images,
      description:product.description
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
  }
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }
  deletefrmwish(id:any){
   return this.http.delete('http://localhost:3000/deletewish/'+id)
  }
}
