import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResidencesComponent } from './residences/residences.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { FormappartComponent } from './formappart/formappart.component';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';

const ROUTES:Routes=[
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:ResidencesComponent},
  {path:"card",component:CardresidenceComponent},
  { path: "appartement/list", component: ListAppartementComponent },
  {path:"card/showappart/:id",component:ShowappartComponent},
  {path:"card/showappart/:id/addappart/:id",component:FormappartComponent},
 // {path:"**",component:PagenotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
