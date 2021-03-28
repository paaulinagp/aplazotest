import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { NoteInterface } from 'src/app/shared/interfaces/note.interface';
import { NotesService } from 'src/app/shared/services/notes/notes.service';

import { HomePageComponent } from './home-page.component';
class MdDialogMock {
  open() {
    return {
      afterClosed: () => of({title: 'hola'})
    };
  }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let notesService: NotesService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MatDialog,
          useClass: MdDialogMock,
        },
        {
          provide: NotesService,
          useValue: {
            changeStatus: (id: number, status: string) => {},
            add: (note: NoteInterface ) => {},
            getNextIdNote: () => 1,
            getNotes: () => [],
          },
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    notesService = TestBed.inject(NotesService);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the method to change the status of the note', () => {
    const spy = spyOn(notesService, 'changeStatus').and.callThrough();
    component.changeStatus('active',1);
    expect(spy).toHaveBeenCalled();
  });

  describe('should open the dialog', () => {
    it('and call the method to add a new note when the result is valid', () => {
      spyOn(dialog, 'open').and.callThrough();
      const spy = spyOn(notesService, 'add').and.callThrough();

      component.openDialog();
      expect(dialog.open).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
    });
    it('and doesn´t call the method to add', () => {
      spyOn(dialog, 'open').and.callThrough();
      component.openDialog();
      expect(dialog.open).toHaveBeenCalled();
    });
  });
});
