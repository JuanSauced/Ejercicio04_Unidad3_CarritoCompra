import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-addnewproduct',
  templateUrl: './view-addnewproduct.page.html',
  styleUrls: ['./view-addnewproduct.page.scss'],
})
export class ViewAddnewproductPage implements OnInit {
  public product:Product;
  name = ""
  description = ""
  price = 0
  photo = ""
  quantity=0
  constructor(private productService:ProductService,private router: Router ) { }

  /**
   * TAKIS GUACAMOLE: https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_huakamole.png
   * NARANJAS: https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_volcano.png
   * 
  */
  ngOnInit() {
  }

  public addProduct(){
    this.product = {
      name: this.name,
      description: this.description,
      price: this.price,
      photo: this.photo,
      quantity: 0
    }
    this.name = ""
    this.description = ""
    this.price = 0
    this.photo = ""
   this.productService.newProduct(this.product);
   this.router.navigate(['/home']);
  }
}
