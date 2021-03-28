import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteInterface } from '../../interfaces/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  /**
   * Información de la nota
   */
  @Input() note: NoteInterface;

  /**
   * Evento que emite la acción del botón seleccionado
   */
  @Output() button: EventEmitter<string>;

  /**
   * Constructor
   */
  constructor() {
    this.button = new EventEmitter();
  }

  /**
   * Ciclo de vida OnInit
   */
  ngOnInit(): void {}
}
