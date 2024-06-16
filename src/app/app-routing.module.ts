import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellarAuthComponent } from './sellar-auth/sellar-auth.component';
import { FormsModule } from '@angular/forms';
import { SellarHomeComponent } from './sellar-home/sellar-home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'sellar-auth', component: SellarAuthComponent
  },
  {
    path: 'sellar-home', component: SellarHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
