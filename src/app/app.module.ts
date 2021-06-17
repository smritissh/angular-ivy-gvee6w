import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './product/filter.pipe';
import { DetailsFilterPipe } from './details/FilterDetails.pipe';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CartItemService } from './cart-item.service';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':id', component: DetailsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ProductComponent,
    DetailsComponent,
    ProductFilterPipe,
    DetailsFilterPipe,
    HomeComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartItemService]
})
export class AppModule {}
