import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  createTask(title:string){
    this.taskService.createList(title).subscribe((response:any)=>{
      console.log(response);

      //Navegamos a /list/response._id

    })
  }

}
