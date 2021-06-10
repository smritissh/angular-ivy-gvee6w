import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, MatIconModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserServiceService, CartService]
})
export class AppModule {}
