import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Info } from '../models/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor(public infoService: InfoService) { }
  ngOnInit(): void {
    this.getInfo();
  }


  getInfo() {
    this.infoService.getInfo().subscribe((res) => {
      this.infoService.info = res as Info[];
    })
  }
}