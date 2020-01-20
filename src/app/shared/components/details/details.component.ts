import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  array : any = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getArray().subscribe(item => (this.array = item));
  }

}
