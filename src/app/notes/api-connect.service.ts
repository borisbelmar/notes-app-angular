import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INote } from './notes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  private api:string = "http://localhost:8888/notes";

  constructor(private http: HttpClient) { };

  getAllNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(`${this.api}`);
  };

  getById(id:number): Observable<INote> {
    return this.http.get<INote>(`${this.api}/${id}`);
  };

  create(note:INote): Observable<any> {
    return this.http.post(`${this.api}`, note);
  }

  updateById(id:number, note:INote): Observable<any> {
    return this.http.put(`${this.api}/${id}`, note);
  }

  deleteById(id:number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}