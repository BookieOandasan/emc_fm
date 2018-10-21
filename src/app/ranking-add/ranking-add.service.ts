import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicantModel } from '../ranking/applicant.model';
import { Observable } from 'rxjs';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({providedIn: 'root'})
export class RankingAddService {
    private handleError: HandleError;
    
    constructor(private _httpClient: HttpClient ,httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('RankingAddService');

    }
    saveNewApplicant(applicant:ApplicantModel):Observable<ApplicantModel>{
        console.log("trying to save new applicant!");
       return this._httpClient.post<ApplicantModel>("https://localhost:44353/odata/Applicants/",applicant, httpOptions)
       .pipe(catchError(this.handleError('saveNewApplicant',applicant)));
    }
    
}