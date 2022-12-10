import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, publishLast, refCount, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Group } from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  public groupData$ = new Observable();

  getGroups() {
    this.groupData$ = this.http
      .get<Group>(environment.backendHost+'/groups/A')
      .pipe(
        map(response => new Group(response.name,response.teams)),
        publishLast(),
        refCount(),
        catchError((err) => throwError(err))
      );

      return this.groupData$
  }
}
