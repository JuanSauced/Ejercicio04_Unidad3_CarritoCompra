import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  public product : Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.product = this.productService.getProductById(params.id);
    });
  }

}
