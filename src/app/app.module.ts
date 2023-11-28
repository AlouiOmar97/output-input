import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartComponent } from './showappart/showappart.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormappartComponent } from './formappart/formappart.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
    FooterComponent,
    CardresidenceComponent,
    PagenotfoundComponent,
    ShowappartComponent,
    FormappartComponent,
    ErrorsComponent,
    ListAppartementComponent,
    AppartementComponent,
    UpdateAppartementComponent,
    AddAppartementComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
