import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './product/filter.pipe';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ProductComponent,
    DetailsComponent,
    ProductFilterPipe,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
