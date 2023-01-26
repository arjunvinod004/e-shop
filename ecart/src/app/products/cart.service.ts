import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartarr:any=[];
cartlists= new BehaviorSubject([])
  constructor() { }
  // add to cart
  addcart(product:any){
    this.cartarr.push(product);
    this.cartlists.next(this.cartarr)
    console.log(this.cartlists);
    // calling gettotal function
    let total = this.gettotall();
    console.log(total);
    
    
  }
  // total price
  gettotall(){
    var grandsum=0;
    this.cartarr.map((item:any)=>{
      grandsum+=item.price
    })
 return grandsum;
    }
    // remove item from cart
    removecart(product:any){
      this.cartarr.map((item:any,index:any)=>{
        if(product.id==item.id){
          this.cartarr.splice(index,1);
        }
      })
      this.cartlists.next(this.cartarr)// remove and update
    }
  }
 


