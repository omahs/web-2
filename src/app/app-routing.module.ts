import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathResolveService } from './services';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bootstrap',
    pathMatch: 'full',
  },
  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./modules/bootstrap.module').then((m) => m.BootstrapModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'canvas',
    loadChildren: () =>
      import('./modules/canvas.module').then((m) => m.CanvasModule),
  },
  {
    path: 'domain/:domain',
    loadChildren: () =>
      import('./modules/domain.module').then((m) => m.DomainModule),
  },
  {
    path: 'profile/:user',
    loadChildren: () =>
      import('./modules/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./modules/manage.module').then((m) => m.ManageModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'category/:category',
    loadChildren: () =>
      import('./modules/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'checkout/:serial',
    loadChildren: () =>
      import('./modules/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    loadChildren: () =>
      import('./modules/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
