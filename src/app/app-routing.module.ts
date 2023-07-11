import { Component, NgModule } from '@angular/core';




//importe de los componentes y el router para manejo de rutas 
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: "home",
    component: HomeComponent
  },
  { path: "about",
    component: AboutComponent
  },
  { path: "contact",
    component: ContactComponent
  },
  { 

    //importar modulo de posts, controlar todos los posteos
    path: "posts",
    loadChildren: () => import ('./pages/posts/posts.module').then( m => m.PostsModule)
  },
  

  //si la persona escribe cualquier otra cosa será redirigido al home 
  { path: "**",
    redirectTo: 'HomeComponent'
  }

]



@NgModule({
  imports: [
    //manejo de rutas principales
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]


})
export class AppRoutingModule { }
