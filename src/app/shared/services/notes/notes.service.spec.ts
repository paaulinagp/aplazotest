import { TestBed } from '@angular/core/testing';
import { NoteInterface } from '../../interfaces/note.interface';

import { NotesService } from './notes.service';

localStorage.clear();

describe('NotesService', () => {
  let service: NotesService;
  const notes: NoteInterface[] = [
    {
      id: 1,
      title: 'titulo',
      date: '',
      content: '',
      status: 'active'
    },
    {
      id: 2,
      title: 'titulo',
      date: '',
      content: '',
      status: 'archived'
    },
    {
      id: 3,
      title: 'titulo',
      date: '',
      content: '',
      status: 'deleted'
    }

  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new note', () => {
    service.add(notes[0]);
    expect(service.getNotes()).toEqual([notes[0]]);
  });

  describe('should get the notes', () => {
    it('that are active', () => {
      service.setNotes(notes);
      const notesActive = service.getNotes();
      expect(notesActive).toEqual([notes[0]]);
    });
    it('that are archived', () => {
      service.setNotes(notes);
      const notesArchived = service.getNotes('archived');
      expect(notesArchived).toEqual([notes[1]]);
    });
    it('that are deleted', () => {
      service.setNotes(notes);
      const notesDeleted = service.getNotes('deleted');
      expect(notesDeleted).toEqual([notes[2]]);
    });
  });

  it('should change the status of a note with the id', () => {
    service.setNotes(notes);
    service.changeStatus(1, 'archived');
    const newNotes = service.getNotes('archived');
    expect(newNotes).toEqual(
      [{...notes[0], status: 'archived'}, {...notes[1]}]
    );
  });

  it('should return the next id', () => {
    service.setNotes(notes);
    const id = service.getNextIdNote();
    expect(id).toBe(4);
  });

  it('should return the next id when doesn´t exists notes', () => {
    service.setNotes([]);
    const id = service.getNextIdNote();
    expect(id).toBe(1);
  });
});
