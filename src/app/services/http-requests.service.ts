import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpRequestsService {
    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        const url =
            'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
        const headers = new HttpHeaders({
            'X-RapidAPI-Key':
                'd2b3b5f552mshd1103942dcd34c3p122521jsnddfd2821eaa1',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
        });

        return this.http.get<any>(url, { headers });
    }
}
