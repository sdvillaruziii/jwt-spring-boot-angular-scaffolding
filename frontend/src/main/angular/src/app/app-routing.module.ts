import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CookieListComponent } from './pages/cookie-list/cookie-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cookies', component: CookieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
