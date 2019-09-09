import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { 
    path: 'notes', 
    component: NotesComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: ':id', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
