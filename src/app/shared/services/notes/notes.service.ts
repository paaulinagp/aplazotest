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
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
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
   * Guarda notas en el storage
   */
  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
