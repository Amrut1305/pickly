import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pId !: string
  myProd !:Iproduct
  selectedImg !: string
  constructor(
    private _routes : ActivatedRoute,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.pId = this._routes.snapshot.params['id']
    this._productService.getproduct(this.pId)
    .subscribe(res=>{
      this.myProd=res
      this.selectedImg = this.myProd.images[0]
    })
  }

  selectImage(img: string) {
    this.selectedImg=img
    console.log(this.selectedImg);
    
  }


}
