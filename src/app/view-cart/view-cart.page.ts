import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {
  public productCart:Product[];
  public c:number=0;
  
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.productCart = this.productService.getCart();
    });
    for (let i = 0; i < this.productCart.length; i++) {
      this.c+=(this.productCart[i].price*this.productCart[i].quantity);
    }
    console.log(this.c);
  }
  
  public deleteProduct(i:number){
    if(this.productCart[i].quantity>1){
      this.productCart[i].quantity-=1;
    }else{
    this.productService.deleteProduct(i);
  }
  this.c=0;
    for (let i = 0; i < this.productCart.length; i++) {
      this.c+=(this.productCart[i].price*this.productCart[i].quantity);
    }
  }
  public moreProduct(i:number){
    this.productCart[i].quantity+=1;
    this.c=0;
    for (let i = 0; i < this.productCart.length; i++) {
      this.c+=(this.productCart[i].price*this.productCart[i].quantity);
    }
  }
}
