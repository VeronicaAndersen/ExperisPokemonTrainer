import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LandingFormComponent } from './components/landing-form/landing-form.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';

// Decorator 
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    TrainerPage,
    CataloguePage,
    LandingFormComponent,
    CollectionListComponent,
    CatalogueListComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
