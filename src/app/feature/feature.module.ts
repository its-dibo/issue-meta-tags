import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyChildComponent } from './lazy-child.component';

const routes: Routes = [{ path: '**', component: LazyComponent }];

@NgModule({
  declarations: [LazyComponent, LazyChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureModule {}
