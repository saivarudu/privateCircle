import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  @Output() detailArray = new EventEmitter();
  @Output() searchText = new EventEmitter();

  constructor(private httpService: HttpClient) { }

  storeArray(arr) {
    this.detailArray.emit(arr);
  }

  getArray() {
    return this.detailArray;
  }

  getList() {
    return this.httpService.get('./assets/json/data.json');
  }

  storeSearchName(name) {
    this.searchText.emit(name);
  }

  getSearchName() {
    return this.searchText;
  }

}
