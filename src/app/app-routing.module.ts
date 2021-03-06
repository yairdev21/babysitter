import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { PostJobComponent } from './components/post-job/post-job.component';


const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'post', component: PostJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
