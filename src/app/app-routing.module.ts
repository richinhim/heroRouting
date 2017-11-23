import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {NgModule} from "@angular/core";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routers: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routers)],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
