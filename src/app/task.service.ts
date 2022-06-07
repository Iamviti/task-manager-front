import { Injectable } from '@angular/core';
import { webService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:webService) { }


  createList(title:string){
    return this.webReqService.post('list',{title});
  }

  getLists(){
    return this.webReqService.get('list');
  }

  getTasks(listId: string){
    return this.webReqService.get(`list/${listId}/task`);
  }
}
