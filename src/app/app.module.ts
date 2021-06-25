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

import { FormComponent } from './form/form.component';
import { NameService } from './name.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
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
    FormComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartItemService, NameService]
})
export class AppModule {}
