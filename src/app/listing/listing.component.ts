import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  array: any = [];
  searchText: any;
  mainObject: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getSearchName().subscribe(item => (this.searchText = item));
    this.appService.getList().subscribe((success: any) => {
      this.mainObject = success;
    }, (err) => {
      alert('Unable to Parse JSON File');
    });
  }

  view(x) {
    this.array = x;
    this.appService.storeArray(this.array);
  }
}
