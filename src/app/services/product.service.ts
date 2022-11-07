import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  private productCart: Product[];
  constructor() { 
    this.products = [
      {
        photo: "https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_fuego.png",
        name: "Takis morados",
        description:"son morados y pican",
        price: 15,
        id: "t1",
        quantity:0
      },
      {
        photo: "https://www.barcel.com.mx/themes/custom/barceldos/images/files/takis_original.png",
        name: "Takis verdes",
        description: "son verdes y son originales",
        price: 14,
        id:"t2",
        quantity:0
      },
      {
        photo: "https://superlomas.odoo.com/web/image/product.template/2764/image_256/%5B7500810000502%5D%20TAKIS%20SALSA%20BRAVA%2068%20GR?unique=5feb10c",
        name: "Takis amarillos",
        description: "son amarillos y no pican tanto ",
        price: 16,
        id:"t3",
        quantity:0
      }
    ];
    this.productCart = [];
  }
  public getProducts(): Product[] {
    return this.products;
  }
  public addProduct(nmb:string,des:string,pr:number,idpro:string,cant:number,foto:string) {
    console.log(foto);
    if(foto === undefined){foto="https://picsum.photos/600/?random=4";}
    this.products.push({photo: foto, name: nmb, description:des,price:pr,id:idpro,quantity:cant});
  }// photo: string;

  public getProductById(id:string): Product {
    let item = this.products.find(
      (product)=>{
        return product.id===id;
      }
    );
    return item;
  }
  // Funciones para el carrito
  public getCart(): Product[] {
    return this.productCart;
  }
  public addCart(i:number) {
    //se agrega al carro
    let pos=-1;
    //verifica si ya se agrego al carro
    pos=this.productExist(this.products[i].id)
    if(pos==-1){
    //si no se agrego, se inserta en el segundo arreglo
    this.productCart.push(this.products[i]);
    this.productCart[this.productCart.length-1].quantity+=1;
    }
    //si existe en el segundo arreglo, se incrementa la cantidad
    else{
        this.productCart[pos].quantity+=1;
    }
  }
  public productExist(id:String): number {
    for (let i = 0; i < this.productCart.length; i++) {
      if(this.productCart[i].id==id)
        return i
    }
    return -1
  }
  
}
