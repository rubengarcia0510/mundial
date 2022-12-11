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
  public grupoA = new Observable();
  public grupoB = new Observable();
  public grupoC = new Observable();
  public grupoD = new Observable();
  public grupoE = new Observable();
  public grupoF = new Observable();
  public grupoG = new Observable();
  public grupoH = new Observable();

  getGroup(grupo:string) {
    this.groupData$ = this.http
      .get<Group>(environment.backendHost+'/groups/'+grupo)
      .pipe(
        map(response => new Group(response.name,response.teams)),
        publishLast(),
        refCount(),
        catchError((err) => throwError(err))
      );

      return this.groupData$
  }
}
