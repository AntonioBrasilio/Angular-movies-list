import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-movie-card',
    standalone: true,
    imports: [MatCardModule, CommonModule],
    templateUrl: './movie-card.component.html',
    styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
    @Input() movie: any;

    isHidden = true;
}
