import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {

  notes:Note[]= [
    {
      note_id: 1,
      note_name: "Primera nota",
      note_body: "Nota con cuerpo",
      created_at: "2019-09-08 12:24:25",
      updated_at: "2019-09-08 12:24:25"
    },
    {
      note_id: 2,
      note_name: "Segunda nota",
      note_body: "Agregamos una nota",
      created_at: "2019-09-08 12:24:25",
      updated_at: "2019-09-08 12:24:25"
    },
    {
      note_id: 3,
      note_name: "Nueva nota",
      note_body: "Un body en la nota",
      created_at: "2019-09-08 14:34:48",
      updated_at: "2019-09-08 14:34:48"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
