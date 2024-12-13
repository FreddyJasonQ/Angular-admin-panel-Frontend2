// src/app/dashboard/dashboard.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  orders: any[] = [];
  customers: any[] = [];
  isSidebarActive: boolean = false;

  constructor(private dataService: DataService) { }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  ngOnInit(): void {
    this.dataService.getOrders().subscribe(data => {
      this.orders = data;
    });

    this.dataService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }
}

