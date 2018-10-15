import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RankingAddService {
    constructor(private _httpClient: HttpClient) { }
    
}