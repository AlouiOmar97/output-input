import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appartement } from '../models/appartement';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
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

  @Output() deleteEvent=new EventEmitter<Appartement>();
  @Output() updateEvent=new EventEmitter<Appartement>();



  deleteApp() {
    console.log("delete app with id: "+this.app.id);
    this.deleteEvent.emit(this.app)
  }

  updateApp() {
    console.log("update app with id: "+this.app.id);
    this.updateEvent.emit(this.app)
  }

}
