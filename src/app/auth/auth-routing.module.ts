import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DubsLayoutComponent } from '../shared/dubs-layout/dubs-layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: DubsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'login2',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
