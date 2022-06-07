import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch:'full'},
  {path: 'new-list', component: NewListComponent},
  {path: 'new-task', component: NewTaskComponent},
  {path:'list', component: TaskViewComponent},
  {path:'list/:listId', component: TaskViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
