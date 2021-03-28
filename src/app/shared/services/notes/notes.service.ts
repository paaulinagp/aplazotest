import { Injectable } from '@angular/core';
import { NoteInterface } from '../../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  /**
   * Variable de notas
   */
  private notes: NoteInterface[];

  /**
   * Constructor
   */
  constructor() {
    // Inicializando las notas
    this.setNotes( JSON.parse(localStorage.getItem('notes')) || [] );
  }

  setNotes(notes: NoteInterface[]){
    this.notes = notes;
  }

  /**
   * Obtiene el listado de notas por status
   *
   * @param status Status de las notas a mostrar
   * @returns Array<NoteInterface> de notas
   */
  getNotes(status: string = 'active') {
    return this.notes.filter( note => note.status === status );
  }

  /**
   * Guarda una nueva nota
   *
   * @param note <NoteInterface> Nota a guardar
   */
  add(note: NoteInterface) {
    this.notes.push(note);
    this.saveNotes();
  }

  /**
   * Cambia el status de la nota
   *
   * @param id Id de la nota a modificar
   * @param status Status por el cual se cambiará:['active', 'archived', 'deleted']
   */
  changeStatus(id: number, status: string)  {
    this.notes = this.notes.map(note => {
      if(note.id === id) {
        note.status = status;
      }
      return note;
    });
    this.saveNotes();
  }

  /**
   * Devuelve id siguiente del array de notas
   *
   * @returns Regresa el nuevo id para guardar en las notas
   */
  getNextIdNote() {
    return this.notes.length > 0 ? this.notes[this.notes.length-1].id + 1 : 1;
  }

  /**
   * Guarda notas en el storage
   */
  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
