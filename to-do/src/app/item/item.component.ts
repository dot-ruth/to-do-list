import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {item} from "../item"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {

  constructor() { }

  
    editable = false;
    @Input() Item: item ;
    @Input() newItem: string ;
    @Output() remove = new EventEmitter<item>();
    saveitem(description:string){
      if (!description) return;
      this.editable = false;
      this.Item.description = description
    }
  

}
