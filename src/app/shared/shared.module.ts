import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ANGULAR MATERIAL
 */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './components/note/note.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleComponent } from './components/toggle/toggle.component';


@NgModule({
  declarations: [DialogComponent, NoteComponent, HeaderComponent, ToggleComponent],
  exports: [DialogComponent, NoteComponent, HeaderComponent, ToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
