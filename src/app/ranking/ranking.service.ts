import { ApplicantModel } from './applicant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RankingService {
    constructor(private _httpClient: HttpClient) { }

    getApplicants():Promise<any>{
      return this._httpClient.get('https://localhost:44353///odata/Applicants')
        .toPromise()
        .then(result=>{ 
            console.log("Applicant Result");
            console.log(result)
            return result})
    }
    
}