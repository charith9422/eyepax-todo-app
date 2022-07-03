import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHelperService {

  constructor() { }

  //Error handler
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error occurred:', error.error);
    } else {
      console.error(
        `API returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
