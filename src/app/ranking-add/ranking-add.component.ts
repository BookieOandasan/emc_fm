import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ranking-add',
  templateUrl: './ranking-add.component.html',
  styleUrls: ['./ranking-add.component.css']
})
export class RankingAddComponent implements OnInit {

  applicantForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit button")
    console.warn(this.applicantForm.value);
  }

}
