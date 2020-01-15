import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {GetItemService} from '../get-item.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  items:Item[];
  itemTitle:String;
  itemNote:String;
  selectedItem:Item;
  addNew:Boolean;
  deleteFlag:Boolean;
  isMarked:Boolean;
  isEdit:Boolean;
  editTitle:String;
  editNote:String;
  confirmEdit:Boolean;

  constructor(private getItemService:GetItemService) { }

  onSubmit(){

    this.items.push({title:this.itemTitle,note:this.itemNote,checked:false});
    this.addNew = false;
    this.selectedItem = this.items[this.items.length-1];
   
  }
  getItems(){
    this.items = this.getItemService.getItems();
  }
  viewItem(item:Item){
    this.selectedItem = item;
  }
  closeDetail(){
    this.selectedItem = undefined;
  }

  addItem(){
    this.addNew = !this.addNew;

  }
  onCheck(item:Item){
    const index = this.items.indexOf(item);
    this.items[index].checked = !this.items[index].checked;
    
  }

  onEdit(item:Item){
    this.confirmEdit = true;
    const index = this.items.indexOf(item);
    this.items[index].title = this.editTitle;
    this.items[index].note = this.editNote;
    this.isEdit = false;
  }

  editItem(item:Item){
      this.isEdit= true;
      this.editTitle = item.title;
      this.editNote = item.note;
  }

  deleteItem(item:Item){  
    confirm("Are you sure to Delete "+ item.title + "?")?this.deleteFlag = true:this.deleteFlag = false;
    if(this.deleteFlag){
      const index = this.items.indexOf(item);
       if (index > -1) {
         this.items.splice(index, 1);
     }
  }
  this.selectedItem = undefined;

    
  }

  ngOnInit() {
    this.getItems();
  }

}
