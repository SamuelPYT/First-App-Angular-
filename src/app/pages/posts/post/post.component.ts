import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent {
  //traer el la propiedad mensaje externamente, desde el compoenente padre POSTS
  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>(); 



  onClick(){
    this.clickPost.emit( this.mensaje.id )
  }


}
