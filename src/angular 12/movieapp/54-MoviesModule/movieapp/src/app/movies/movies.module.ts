import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieFilterPipe } from "./movie-filter.pipe";
import { MovieComponent } from "./movie/movie.component";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MoviesComponent } from "./movies.component";
import { SummaryPipe } from "./summary.pipe";

@NgModule({
    declarations: [
        MoviesComponent,
        MovieComponent,
        MovieDetailsComponent,
        SummaryPipe,
        MovieFilterPipe,
        MovieCreateComponent,
        MoviesHomeComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MoviesComponent,
        MovieComponent,
        MovieDetailsComponent,
        SummaryPipe,
        MovieFilterPipe,
        MovieCreateComponent,
        MoviesHomeComponent
    ]
})
export class MoviesModule {

}