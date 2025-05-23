import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { MaterialModule } from './shared/module/material/material.module';
import { LengthPipe } from './shared/pipe/length.pipe';
import { RatingComponent } from './shared/component/product-detail/rating/rating.component';
import { HomeComponent } from './shared/component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductDetailComponent,
    LengthPipe,
    RatingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
