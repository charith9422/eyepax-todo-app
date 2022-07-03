import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/data';
import { environment } from 'src/environments/environment';
import { tap, retry, catchError } from 'rxjs/operators';
import { ErrorHelperService } from '../helpers/error-helper.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private errorHelper: ErrorHelperService
  ) {}

  //get todo list
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(environment.GET_TODOS)
      .pipe(retry(3), catchError(this.errorHelper.handleError));
  }

  //get specific todo
  getTodo(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${environment.GET_TODO}${id}`)
      .pipe(retry(3), catchError(this.errorHelper.handleError));
  }
}
