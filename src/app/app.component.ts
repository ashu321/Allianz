import { Component, OnInit } from '@angular/core';
import { AllianzService } from './allianz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Allianz Assignment';
  countryList:any;
  countryname:string;
  filteredCountryList:any;

  constructor(private allianzService:AllianzService){

  }
  ngOnInit(): void {
    this.allianzService.getCountryList().subscribe(data=>{
      this.countryList = data;
      this.assignCopy();
      console.log(data);
    });
  }

  assignCopy(){
    this.filteredCountryList = Object.assign([], this.countryList);
 }
 filterItem(_event){
    let value = _event.target.value;
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredCountryList = Object.assign([], this.countryList).filter(
       item => item.name.common.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

}
