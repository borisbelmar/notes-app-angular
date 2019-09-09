import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:number;
  private sub: any;
  editForm;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  onSubmit(noteData) {
    console.log('Nota actualizada!', noteData);
  }

  delete(id) {
    window.alert('Nota a eliminar: '+id)
  }

  cancel() {
    this.location.back();
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: 'Esta es una nota',
      body: 'Y este es su cuerpo'
    });
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
