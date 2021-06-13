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
import { ProductComponent } from '../details/details.component';

const appRoutes: Routes = [{ path: 'details', component: DetailsComponent }];
export default appRoutes;
