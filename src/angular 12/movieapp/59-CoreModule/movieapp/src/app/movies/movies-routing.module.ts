import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MoviesComponent } from "./movies.component";

const routes: Routes = [
    {
        path: '',
        component: MoviesHomeComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: MoviesComponent},
          { path: 'category/:categoryId', component: MoviesComponent },
          { path: 'create', component: MovieCreateComponent },
          { path: ':movieId', component: MovieDetailsComponent },
        ]
      },  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {

}