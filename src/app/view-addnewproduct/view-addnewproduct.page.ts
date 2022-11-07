import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-view-addnewproduct',
  templateUrl: './view-addnewproduct.page.html',
  styleUrls: ['./view-addnewproduct.page.scss'],
})
export class ViewAddnewproductPage implements OnInit {
  public nombre: string;
  public descripcion: string;
  public precio: number;
  public idproducto: string;
  public cantidad: number;
  public foto: string;
  constructor(private productService:ProductService) { }

  /**
   * TAKIS GUACAMOLE: https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_huakamole.png
   * NARANJAS: https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_volcano.png
   * 
  */
  ngOnInit() {
  }

  public addProduct(){

    this.productService.addProduct(this.nombre,this.descripcion,this.precio,
      this.idproducto,0,this.foto);
      this.nombre = "";  this.descripcion = ""; this.precio = 0; this.idproducto = "";  
 
  }
}
