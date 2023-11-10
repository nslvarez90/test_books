import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLisRoutingModule } from './book-lis-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { RouterModule } from '@angular/router';
import { NgArrayPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    SingleBookComponent
  ],
  imports: [
    CommonModule,
    BookLisRoutingModule,
    RouterModule,
    NgArrayPipesModule,
    FormsModule
  ]
})
export class BookLisModule { }
