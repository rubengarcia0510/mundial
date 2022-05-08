import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GanadorComponent } from './ganador.component';

describe('GanadorComponent', () => {
  let component: GanadorComponent;
  let fixture: ComponentFixture<GanadorComponent>;
  let name:string

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanadorComponent ],
      imports: [ MatDialogModule ],
      providers : [
        {provide:MatDialogRef , useValue:{} },

        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadorComponent);
    component = fixture.componentInstance;
    component.data.name= "España";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
