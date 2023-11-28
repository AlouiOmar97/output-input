import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent {

  res : Residence={id: 0, name: "", address: "", image: ""}
  @Input() app : Appartement= {
    id: 0, 
    terrasse: "",
    numAppart: 0, 
    numEtage: 0, 
    surface: 0, 
    surfaceTerrasse: 0, 
    category: "", 
    description: "", 
    status: false ,
    residence: this.res
  };
  appartform!:FormGroup
  id=0
  @Output() updateFormEvent=new EventEmitter<Appartement>();

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
update(){
  console.log("my form"+JSON.stringify(this.appartform.value))
  
  this.app.description= this.appartform.value.description
  this.app.numAppart= this.appartform.value.numAppart
  this.updateFormEvent.emit(this.app)
}

}
