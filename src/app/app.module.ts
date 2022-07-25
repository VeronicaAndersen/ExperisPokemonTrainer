import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { FormsModule } from '@angular/forms';
import { CatalogueListItemComponent } from './components/catalogue-list-item/catalogue-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectedButtonComponent } from './components/collected-button/collected-button.component';
import { FooterComponent } from './components/footer/footer.component';

// Decorator 
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CataloguePage,
    LoginFormComponent,
    CatalogueListComponent,
    CatalogueListItemComponent,
    NavbarComponent,
    CollectedButtonComponent,
    FooterComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
