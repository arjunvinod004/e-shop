import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartitemss:any=[]
 grand:number=0
  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartlists.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitemss=data;
        
      }
    )
    this.grand=this.cart.gettotall()
  }
  removeitem(product:any){
    this.cart.removecart(product)
    this.grand=this.cart.gettotall()
  }
  complete(){
    alert(' your order is completed')
    this.router.navigateByUrl('')
  }

}
