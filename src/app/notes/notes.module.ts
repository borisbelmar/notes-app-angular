import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotesComponent } from './notes.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    NotesComponent, 
    ListComponent, 
    FormComponent, 
    NoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    HttpClientModule
  ]
})
export class NotesModule { }
