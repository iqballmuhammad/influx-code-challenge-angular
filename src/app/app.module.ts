import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule
  } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetService } from './planet.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    PlanetsComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpModule
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
