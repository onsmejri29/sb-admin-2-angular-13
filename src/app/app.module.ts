import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { UtilitiesColorComponent } from './utilities-color/utilities-color.component';
import { UtilitiesBorderComponent } from './utilities-border/utilities-border.component';
import { UtilitiesAnimationComponent } from './utilities-animation/utilities-animation.component';
import { UtilitiesOtherComponent } from './utilities-other/utilities-other.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BlankComponent } from './blank/blank.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    ButtonsComponent,
    CardsComponent,
    UtilitiesColorComponent,
    UtilitiesBorderComponent,
    UtilitiesAnimationComponent,
    UtilitiesOtherComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
