import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { INote } from '../notes.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  
  @Input() note:INote;

  constructor() { }

  ngOnInit() {
  }

}
