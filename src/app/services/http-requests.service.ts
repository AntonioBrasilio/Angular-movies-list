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
                '2306b93b9cmsh16f4846061ad023p1d778cjsn2037ff385542',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
        });

        return this.http.get<any>(url, { headers });
    }
}
