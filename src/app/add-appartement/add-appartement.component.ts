import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent {
  imageUrl:string='/assets/images/'
  res : Residence=    {id: 1, name: "Residence 1", address: "Address 1", image: this.imageUrl+"residence1.jpg"}
  app : Appartement= {
    id: 0, 
    terrasse: "",
    numAppart: 0, 
    numEtage: 5, 
    surface: 0, 
    surfaceTerrasse: 0, 
    category: "", 
    description: "", 
    status: false ,
    residence: this.res
  };
  appartform!:FormGroup
  id=0
  @Output() addFormEvent=new EventEmitter<Appartement>();

constructor(private acr : ActivatedRoute){

}

ngOnInit(): void {
  //this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    numAppart:new FormControl(this.app.numAppart,Validators.required,),
    description:new FormControl(this.app.description,[Validators.required, Validators.minLength(10)]),
    residence:new FormControl(this.app.id,Validators.required),
  })
}
get numAppart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
add(){
  console.log("my form"+JSON.stringify(this.appartform.value))
  
  this.app.description= this.appartform.value.description
  this.app.numAppart= this.appartform.value.numAppart
  this.addFormEvent.emit(this.app)
}

}
