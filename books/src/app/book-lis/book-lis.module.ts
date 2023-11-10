import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLisRoutingModule } from './book-lis-routing.module';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookLisRoutingModule
  ]
})
export class BookLisModule { }
