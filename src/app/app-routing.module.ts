import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';

const routes: Routes = [
  {
    path:'home',
    component : ProductsDashboardComponent,
  },
  {
    path:'',
    redirectTo :'home',
    pathMatch: 'full',
  },
  {
    path:'products',
    component : ProductsDashboardComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
