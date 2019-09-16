import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { INote } from '../notes.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public note:INote;
  private editForm;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onSubmit(noteData) {
    console.log('Nota actualizada!', noteData);
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: "",
      body: ""
    });
  }

  ngOnDestroy() {
  }

}
