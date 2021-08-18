import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports: [ModelModule,BrowserModule, FormsModule],   
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent],
    exports: [ShopComponent]
})
export class ShopModule {}