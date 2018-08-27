import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {}
  getUsuarios() {
    return this.http.get('https://back-end-tienda.firebaseio.com/usuarios/.json')
      .map((response: Response) => response.json());
  }
}
