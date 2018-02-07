import { Component, OnInit } from '@angular/core';
import { DataSenderService } from './../../../data-sender.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  dataFromTable;
  constructor(private sender: DataSenderService) { }

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.sender.getCardTable().subscribe(data => {this.dataFromTable = data})
  }

  changeSafety(id) {
    this.sender.putCardTable(id);
  }

}
