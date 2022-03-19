import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './feature/normal.component';

const routes: Routes = [
  { path: 'normal', component: NormalComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./feature/feature.module').then(
        (modules) => modules.FeatureModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, NormalComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
