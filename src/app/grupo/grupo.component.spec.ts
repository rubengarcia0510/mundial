import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoComponent } from './grupo.component';

describe('GrupoComponent', () => {
  let component: GrupoComponent;
  let fixture: ComponentFixture<GrupoComponent>;
  let groupName:any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    groupName={
      name:"ruben",
      equipos:[
        {
          name:"boca",
          pj:0,
          pg:0,
          pe:0,
          pp:0,
          gf:0,
          gc:0,
          puntos:0
        }
      ]
    }
    fixture = TestBed.createComponent(GrupoComponent);
    component = fixture.componentInstance;
    component.groupName=groupName;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
