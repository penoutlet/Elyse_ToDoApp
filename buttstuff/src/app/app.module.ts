import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalListComponent } from './anal-list/anal-list.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveButtsComponent } from './reactive-butts/reactive-butts.component'
import {ReactiveFormsModule} from '@angular/forms'
import { ToDoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    AnalListComponent,
    ReactiveButtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
