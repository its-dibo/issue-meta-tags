import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './feature/normal.component';
import { NormalChildComponent } from './feature/normal-child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
  declarations: [AppComponent, NormalComponent, NormalChildComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
