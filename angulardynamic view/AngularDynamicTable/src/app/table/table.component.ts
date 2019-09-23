import { Component, OnInit } from '@angular/core'

import {customer} from '../customer';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    customers= customer;

    constructor(){}
  
    getCustomers(){
       this.customers;
    }
  
    ngOnInit(){
      this.getCustomers();
    }
}
