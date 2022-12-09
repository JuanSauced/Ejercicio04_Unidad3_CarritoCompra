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

  public products : Product[];

  constructor(private productService:ProductService,private router: Router ) {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  public addCart(product: Product,id: string){

    product.quantity = product.quantity+1;
    this.productService.addCart(product,id);

  }

  public getProductById(id: string): void {
    this.router.navigate(['view-product'], {
      queryParams: { id: id },
    });
  }
  public getCart(){
    this.router.navigate(['/view-cart']);
  }

  public addnewProduct(){
    this.router.navigate(['/view-addnewproduct']);
  }

}
