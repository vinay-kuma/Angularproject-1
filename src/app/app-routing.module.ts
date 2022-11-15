import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { DecoratorComponent } from './decorator/decorator.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'table', component: TableComponent },
  { path: 'decorator', component: DecoratorComponent }
  ];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}