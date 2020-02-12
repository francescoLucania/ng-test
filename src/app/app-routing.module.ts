import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NpsComponent} from './pages/nps/nps.component'


const routes: Routes = [
  {
    path: 'nps-view',
    component: NpsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
