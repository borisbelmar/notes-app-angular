import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {

  notes;

  constructor(
    private apiConnect: ApiConnectService
  ) { }

  ngOnInit() {
    this.notes = this.apiConnect.getAllNotes();
  }

}
