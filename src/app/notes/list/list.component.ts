import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';
import { INote } from '../notes.interface';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @ViewChild(NoteComponent, {static: false}) note : NoteComponent;

  @Input() notes: INote[];

  constructor(
    private apiConnect: ApiConnectService
  ) { }

  ngOnInit() {
    this.apiConnect.getAllNotes()
    .subscribe(
      res => { 
        this.notes = res;
      }, 
      err => {
        console.warn("Ocurrió un error conectando con la API");
      }
    );
  }
}