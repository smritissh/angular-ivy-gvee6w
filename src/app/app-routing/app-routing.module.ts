import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';

// @NgModule({
//   imports: [CommonModule, RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

// routerConfig.ts

import { Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';

const appRoutes: Routes = [{ path: 'product', component: ProductComponent }];
export default appRoutes;
