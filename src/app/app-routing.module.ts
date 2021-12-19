import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoWindowComponent } from './info-window/info-window.component';

const routes: Routes = [
  {path: '',redirectTo: '/list',pathMatch: 'full'},
  {path: 'list', component: InfoWindowComponent, children: [
    //  {path:':id',component:AppComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
