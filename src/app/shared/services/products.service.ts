import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../model/products';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUr : string = environment.baseUrl;
  productsUrl : string = `${this.baseUr}/products`
  constructor(
    private _http :HttpClient
  ) { }

  fetchAllData():Observable<Array<Iproduct>>{
    return this._http.get<Array<Iproduct>>(this.productsUrl)
    .pipe(
      map((res:Array<Iproduct>)=>res.slice(0,20))
    )
  }
}
