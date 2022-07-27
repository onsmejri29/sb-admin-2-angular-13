import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';
import { UtilitiesAnimationComponent } from './utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './utilities-color/utilities-color.component';
import { UtilitiesOtherComponent } from './utilities-other/utilities-other.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'blank',
    component: BlankComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'cards',
    component: CardsComponent,
    canActivate : [AuthGuardService] 
  },  
  {
    path: 'charts',
    component: ChartsComponent,
    canActivate : [AuthGuardService] 
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: NotFoundComponent,
    canActivate : [AuthGuardService] 
  },  
  {
    path: 'register',
    component: RegisterComponent 
  },
  {
    path: 'tables',
    component: TablesComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'utilities-animation',
    component: UtilitiesAnimationComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'utilities-border',
    component: UtilitiesBorderComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'utilities-color',
    component: UtilitiesColorComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: 'utilities-other',
    component: UtilitiesOtherComponent,
    canActivate : [AuthGuardService] 
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
