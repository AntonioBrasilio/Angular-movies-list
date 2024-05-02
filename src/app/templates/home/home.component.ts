import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MovieCardComponent, CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor(private httpRequestsService: HttpRequestsService) {}

    moviesList: any = [];
    searchFilter: string = 'dasdsadsa';

    ngOnInit() {
        this.httpRequestsService.getData().subscribe((data) => {
            this.moviesList = data.results;
        });
    }
}
