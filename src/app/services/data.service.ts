import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators'; 



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (private http: HttpClient) { }

  getPosts(){

    //injectar el servicio por url y mostrar lo que está trayendo desde el mismo 
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe( tap (console.log)); 
  }




}
