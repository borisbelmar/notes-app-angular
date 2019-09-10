import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private http: HttpClient) { };

  getAllNotes() {
    return this.http.get('http://localhost:8000/notes');
  };

}
