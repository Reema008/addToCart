import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'STORE';
  item:any;
  price:any;
  total:number=0;
  cart = [];
  catalog = [
    {
      id:1,
      item:"Nike Shoes",
      price:2000
    },
    {
      id:2,
      item:"SkyBags--Back Pack",
      price:1000
    },
    {
      id:3,
      item:"Ray Ban Glasses",
      price:1000
    },
    {
      id:4,
      item:"Levis Jeans",
      price:1500
    },
    {
      id:5,
      item:"Rolex Watch",
      price:3000
    }
  ];
 

  addObject(id:any){
    this.cart.push(this.catalog[id]);
    this.total=this.total+this.catalog[id].price;
  }

  delByID(num,amt){
    this.cart = this.cart.splice(num,1);
    this.total=this.total-amt;
  }
  
  orderplaced(){
    if(this.total!==0){
    alert("Order is placed successfully");
  }}
}
