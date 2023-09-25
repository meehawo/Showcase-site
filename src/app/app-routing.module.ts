import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comp-a', component: CompAComponent },
  { path: 'comp-b', component: CompBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
