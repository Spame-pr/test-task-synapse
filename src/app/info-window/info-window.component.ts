
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Data {
  id: number;
  latitude: number;
  longitude: number;
  name: string
}


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})


export class InfoWindowComponent implements OnInit {



  constructor(private dataService: DataService) { }

  dataArray: Data[] = this.dataService.dataArray
  searchText: string;
 
  ngOnInit(): void {
  }

  show() {
    return this.dataService.getId()
  }
  isClicked(id: number) {
    this.dataService.changeId(id)
  }
  
}
