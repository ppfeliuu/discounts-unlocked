import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DiscountsDetailsComponent } from './discounts/discounts-details/discounts-details.component';
import { DiscountsComponent } from './discounts/discounts.component';

export const routerConfig: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'discounts/:cat',  component: DiscountsComponent },
    { path: 'discounts/:cat/:id',  component: DiscountsComponent },
    { path: 'details/:id',     component: DiscountsDetailsComponent },
    { path: '',          component: LoginComponent },
    { path: '**',          redirectTo: '', pathMatch: 'full' }
  ];
