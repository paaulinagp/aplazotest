import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { NotesService } from 'src/app/shared/services/notes/notes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  /**
   * Constructor
   *
   * @param notesService Servicio de Notas
   * @param dialog Referencia a dialogo de Angular Material
   */
  constructor(public notesService: NotesService, public dialog: MatDialog) { }

  /**
   * Ciclo de vida OnInit
   */
  ngOnInit(): void {}

  /**
   * Se modifica el statud de una nota
   *
   * @param event Resultado del botón emitido de las cards
   * @param id Id de la nota a modificar status
   */
  changeStatus(event: string, id: number): void {
    this.notesService.changeStatus(id, event);
  }

  /**
   * Se abre dialogo para crear nota nueva
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        id: this.notesService.getNextIdNote(),
        title: '',
        date: '',
        content: '',
        status: 'active'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.notesService.add({
          ...result,
          date: new Date()
        });
      }
    });
  }
}
