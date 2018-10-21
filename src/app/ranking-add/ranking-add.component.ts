import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicantModel } from '../ranking/applicant.model';
import { RankingAddService } from './ranking-add.service';

@Component({
  selector: 'app-ranking-add',
  templateUrl: './ranking-add.component.html',
  styleUrls: ['./ranking-add.component.css']
})
export class RankingAddComponent implements OnInit {

  applicantForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: [''],
    address1: [''],
    city: [''],
    state: [''],
    zip: ['']

  })
  //  new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // });

  constructor(private fb: FormBuilder, private service:RankingAddService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit button")
    //console.warn(this.applicantForm.value);
    console.warn(this.applicantForm.value.firstName);

    var applicant = new ApplicantModel()
    applicant.firstname =this.applicantForm.value.firstName;
    applicant.lastname =this.applicantForm.value.lastName;

    this.service.saveNewApplicant(applicant).subscribe(appl=> {
      console.log("Saved")
    });
    

  }

}
