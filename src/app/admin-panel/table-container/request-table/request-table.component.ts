import { Component, OnInit } from '@angular/core';
import { DataSenderService } from './../../../data-sender.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {
  dataFromTable;
  constructor(private sender: DataSenderService) { }

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.sender.getRequestTable().subscribe(data => {this.dataFromTable = data})
  }

}
