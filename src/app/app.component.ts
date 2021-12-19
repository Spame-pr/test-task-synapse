import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {

  constructor(private dataService: DataService){}

  dataArray = this.dataService.dataArray
  latOne:number = 48.1374300;
  lngOne:number = 11.5754900;
  zoom:number = 5;
 
  show(){
    return this.dataService.getId()
  }
}
