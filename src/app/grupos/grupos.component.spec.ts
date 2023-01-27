import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GrupoComponent } from '../grupo/grupo.component';
import { Equipo, Grupo } from '../Interfaces';
import { GroupsService } from '../service/groups.service';

import { GruposComponent } from './grupos.component';

xdescribe('GruposComponent', () => {
  let component: GruposComponent;
  let fixture: ComponentFixture<GruposComponent>;
  let EQUIPOS_GRUPO_H: Equipo[] = [
    { name: 'Portugal', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
    { name: 'Uruguay', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
    { name: 'Corea del Sur', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
    { name: 'Ghana', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
  ];

  let GRUPOS: Grupo[] = [
    {
      name: "H",
      teams: EQUIPOS_GRUPO_H
    }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruposComponent,
        GrupoComponent
      ],
      imports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers:[
        {provider: GroupsService, useValue: {
          getGroups: () => GRUPOS,
        }}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
