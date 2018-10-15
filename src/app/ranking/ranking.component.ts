import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  showSelected: boolean= false;
  col:number=12;
  applicants:any;

  constructor(private _rankingService:RankingService) { }

  ngOnInit() {
    this._rankingService.getApplicants()
      .then(
        data=>{
          this.applicants =data;
        }
      )
  }

  selected(){
    this.showSelected = true;
    this.col=9
  }
  close(){
    this.showSelected = false;
    this.col=12
  }

  convertToArray(num:number):string[]{
    console.log(num)
    console.log("Array" + new Array(num));
    return new Array(num);
  }

}
