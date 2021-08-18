import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule.forChild([
            { path: 'auth', component: AuthComponent }
        ])
    ]
})
export class AuthModule {

}