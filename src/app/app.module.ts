import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SellarAuthComponent } from './sellar-auth/sellar-auth.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellarHomeComponent } from './sellar-home/sellar-home.component';
import { SellarAddProductComponent } from './sellar-add-product/sellar-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellarAuthComponent,
    HomeComponent,
    SellarHomeComponent,
    SellarAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
