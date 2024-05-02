import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor(private httpRequestsService: HttpRequestsService) {}

    moviesList: any = [];

    ngOnInit() {
        this.httpRequestsService.getData().subscribe((data) => {
            this.moviesList = data;
        });
    }
}
