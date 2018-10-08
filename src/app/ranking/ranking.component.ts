import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  showSelected: boolean= false;
  col:number=12;

  constructor() { }

  ngOnInit() {
  }

  selected(){
    this.showSelected = true;
    this.col=9
  }
  close(){
    this.showSelected = false;
    this.col=12
  }

}
