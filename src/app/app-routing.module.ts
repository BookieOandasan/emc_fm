import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingAddComponent } from './ranking-add/ranking-add.component';


const routes: Routes = [
  
  {path:'home', component: HomeComponent},
  {path:'ranking', component: RankingComponent},
  {path:'ranking-add', component: RankingAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
