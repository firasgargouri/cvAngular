import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsComponent } from './cv/details/details.component';
import { TodoComponent } from './todo/component/todo/todo.component';


const routes: Routes = [
  {path:'',component:CvComponent},
  {path:'cv',children:[
    {path:'',component:CvComponent},
    {path:':id',component:DetailsComponent},
  ]},
  {path:'cv',component:CvComponent},
  {path:'todo',component:TodoComponent},
  {path:'color',component:ColorComponent},
  {path:'color/:couleur',component:ColorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
