import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteInterface } from '../../interfaces/note.interface';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  /**
   * Formulario de creación de una nota
   */
   note: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: NoteInterface,
    private fb: FormBuilder) {}

  /**
   * Ciclo de vida OnInit
   *
   * Se inicializa el formulario para crear una nota con validaciones sencillas
   */
  ngOnInit() {
    this.note = this.fb.group({
      id: new FormControl( this.data.id, [Validators.required]),
      date: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      status: new FormControl('active', [Validators.required]),
    });
  }

  /**
   * Función para cerrar dialogo
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
