import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyChildComponent } from './lazy-child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [{ path: '**', component: LazyComponent }];

@NgModule({
  declarations: [LazyComponent, LazyChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes),HttpClientModule],
})
export class FeatureModule {}
