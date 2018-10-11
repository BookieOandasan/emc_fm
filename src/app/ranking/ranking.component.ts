import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';
import { ApplicantModel } from './applicant.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  showSelected: boolean= false;
  col:number=12;
  applicants:any;
  selectedApplicant: ApplicantModel;

  constructor(private _rankingService:RankingService) { }

  ngOnInit() {
    this._rankingService.getApplicants()
      .then(
        data=>{
          this.applicants =data;
        }
      )
  }

  selected(selectedApplicant:ApplicantModel){
    this.showSelected = true;
    this.col=9
    this.selectedApplicant =selectedApplicant;
  }
  close(){
    this.showSelected = false;
    this.col=12
  }

}
