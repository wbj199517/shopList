import { Injectable } from '@angular/core';
import {Item} from './item';
import {Items} from './itemData';

@Injectable({
  providedIn: 'root'
})
export class GetItemService {
  getItems():Item[]{
    return Items;
  }

  constructor() { }
}
