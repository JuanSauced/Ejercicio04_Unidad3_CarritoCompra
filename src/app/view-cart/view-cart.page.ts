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
  public products:Product[];
  public c:number=0;
  
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.c = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.c += this.products[i].quantity * this.products[i].price;
      }
    });

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {

    });
    
  }
  
  public deleteProduct(product:Product,id : string){
  product.quantity = product.quantity-1;
  this.productService.addCart(product,id)
  }
  public moreProduct(product:Product,id : string){
    product.quantity = product.quantity+1;
    this.productService.addCart(product,id)
  }
}
