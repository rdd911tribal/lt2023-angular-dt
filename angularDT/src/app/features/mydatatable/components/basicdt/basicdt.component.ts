import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicdt',
  templateUrl: './basicdt.component.html',
  styleUrls: ['./basicdt.component.scss'],
})
export class BasicDTComponent implements OnInit {
  dtOptions: DataTables.Settings | any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }
}
