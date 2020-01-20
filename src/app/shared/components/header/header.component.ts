import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: any = '';
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  sendText() {
    this.appService.storeSearchName(this.searchText);
    this.appService.storeArray([]);
  }
}
