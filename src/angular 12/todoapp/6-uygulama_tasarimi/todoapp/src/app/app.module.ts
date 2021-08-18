import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
