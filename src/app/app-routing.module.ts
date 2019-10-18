import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'trial/:id', component: TrialComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
