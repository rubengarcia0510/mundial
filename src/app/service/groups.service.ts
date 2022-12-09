import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, publishLast, refCount, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  public userData$ = new Observable();

  getUsers() {
    this.userData$ = this.http
      .get('https://jsonplaceholder.typicode.com/users/2')
      .pipe(
        map((x) => x),
        publishLast(),
        refCount(),
        catchError((err) => throwError(err))
      );
  }
}
