import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {


  list: any;
  task: any;

  constructor(private taskService : TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Cogemos el id de la lista para traer sus respectivas tareas
    this.route.params.subscribe((params : Params)=>{
      console.log(params);
    this.taskService.getTasks(params.listId).subscribe((task: any) => {
      this.task=task;
    })

    })


    this.taskService.getLists().subscribe((list: any) => {
      this.list = list;
    })


  }



}
