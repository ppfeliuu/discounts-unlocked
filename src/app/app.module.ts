import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routerConfig } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Services
import { DiscountsService } from './providers/discounts.service';
import { GeolocationService } from './providers/geolocation.service';
import { AuthService } from './providers/auth.service';

import { AppComponent, DialogOverviewExampleDialogComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { DiscountsDetailsComponent } from './discounts/discounts-details/discounts-details.component';
import { DiscountsListComponent } from './discounts/discounts-list/discounts-list.component';
import { DiscountsMapComponent } from './discounts/discounts-map/discounts-map.component';
import { NavbarListComponent } from './shared/navbar-list/navbar-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { NavbarDetailsComponent } from './shared/navbar-details/navbar-details.component';
import { FixTitlePipe } from './pipes/fix-title.pipe';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DiscountsComponent,
    DiscountsDetailsComponent,
    DiscountsListComponent,
    DiscountsMapComponent,
    NavbarListComponent,
    SortPipe,
    NavbarDetailsComponent,
    FixTitlePipe,
    LoginComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(environment.firebase, 'Discounts'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyyAFzOw-jDq-qxlkZLya6e0asx-U9Tps'
    }),
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent, DiscountsDetailsComponent],
  /* providers: [DiscountsService, GeolocationService, AuthService, SwUpdate], */
  providers: [DiscountsService, GeolocationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
