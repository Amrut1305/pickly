import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  allProducts !: Array<Iproduct>
  
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    // this.allProducts = 

    this._productService.fetchAllData()
    .subscribe(res=>{
      this.allProducts =res
    })
  }
}
