import { ApplicantModel } from './applicant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({providedIn: 'root'})
export class RankingService {
    private handleError: HandleError;
    constructor(private _httpClient: HttpClient,httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('RankingAddService'); }

    getApplicants():Observable<ApplicantModel[]>{
      return this._httpClient.get<ApplicantModel[]>('https://localhost:44353/odata/Applicants')
        .pipe(catchError(this.handleError<ApplicantModel[]>('getApplicants', [])))
        
    }
    
}