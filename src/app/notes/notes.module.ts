import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    NotesComponent, 
    NotesListComponent, 
    EditComponent, 
    CreateComponent, 
    NoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
