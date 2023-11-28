import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formappart',
  templateUrl: './formappart.component.html',
  styleUrls: ['./formappart.component.css']
})
export class FormappartComponent implements OnInit {
appartform!:FormGroup
  id=0
constructor(private acr : ActivatedRoute){

}

ngOnInit(): void {
  this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    numAppart:new FormControl('',Validators.required,),
    description:new FormControl('',[Validators.required, Validators.minLength(10)]),
    residence:new FormControl(this.id,Validators.required),
  })
}
get numAppart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
add(){
  console.log("my form"+JSON.stringify(this.appartform.value))
}
}
