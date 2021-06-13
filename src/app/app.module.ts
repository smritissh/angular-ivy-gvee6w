import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './product/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
