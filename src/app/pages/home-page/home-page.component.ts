import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/services/notes/notes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
    console.log('NOTAS: ');
  }

  addNote(){
    this.notesService.add({
      id: 1,
      title: 'Título',
      date: '2021-03-27',
      content: 'hacer algo aqui',
      status: 'active'
    });
  }

  changeStatus(id: number, status: string){
    this.notesService.changeStatus(id, status);
  }

}
