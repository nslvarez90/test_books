import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLisRoutingModule } from './book-lis-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    SingleBookComponent
  ],
  imports: [
    CommonModule,
    BookLisRoutingModule,
    RouterModule
  ]
})
export class BookLisModule { }
