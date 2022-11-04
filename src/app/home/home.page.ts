import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private products : Product[];

  constructor(private productService:ProductService,private router: Router ) {
    this.products = this.productService.getProducts();
  }

  public addCart(i:number){
    this.productService.addCart(i);
    
  }

  public getProductById(id: string): void {
    console.log(this.productService.getProductById(id));
    this.router.navigate(['/view-product'], {
      queryParams: { id: id }
    });
  }
  public getCart(){
    this.router.navigate(['/view-cart']);
  }

}
