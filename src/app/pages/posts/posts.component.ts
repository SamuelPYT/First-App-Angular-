import { Component, NgZone, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  //generar un nuevo arereglo para la info de los POSTS
  mensajes: any; 

  //injectar el servicio Http creado en el archivo services/data.service
  constructor (private dataService: DataService){}
  
  ngOnInit(){

    //hacer la subscripcion del servicio pero ocupar menos espacio en memoria
     this.mensajes = this.dataService.getPosts()
  }


  escuchaClick( id: number){
     console.log("Click en: ", id)
  }
  


}NgZone
