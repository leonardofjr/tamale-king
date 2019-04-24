import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry, finalize } from 'rxjs/operators';

interface Config {
  url: string,
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MailService {
  url = 'http://localhost:3000/mail';


  constructor(private http: HttpClient) { }

  sendMail(data) {
    return this.http.post(this.url, data, httpOptions)
      .pipe(
        catchError(this.handleError) // then handle the error
      )
  }
  private handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error);
      console.error(
        `Status Code ${error.status}` +
        `\nMessage: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');

  }
}
