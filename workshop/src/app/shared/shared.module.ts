import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
