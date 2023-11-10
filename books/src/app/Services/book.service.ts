import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Book } from '../Model/book.model';


@Injectable({
    providedIn: 'root',
})
export class BookService {

    constructor(private router: Router, private http: HttpClient) { }

    public getAllBooks(url: string): Observable<any> {
        return this.http.get(url);
    }    
}
