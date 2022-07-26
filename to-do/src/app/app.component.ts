import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  filter : 'all'|'active' | 'done' = 'all'
  allItems = [
    
  ]
  get items(){
    if(this.filter === 'all'){
    return this.allItems
    }
    return this.allItems.filter((item)=>this.filter === 'done'?item.done:!item.done)
    
  }
  additem(description:string){
    this.allItems.unshift({
      description,done:false
    });
  }
  remove(item){
    this.allItems.slice(this.allItems.indexOf(item),1)
  }
}
