import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInterface } from 'src/app/core/models/userInterface.model';
import { StoreService } from '../../../core/services/store/store.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'company',
    'firstName',
    'lastName',
    'country',
    'city',
    'accion',
  ];
  dataSource = new MatTableDataSource<UserInterface>();
  constructor(
    private storeService: StoreService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.refresh();
  }
  getAllUsers() {
    this.dataSource = new MatTableDataSource(this.storeService.getAllUsers());
  }
  deleteUsers(id: string) {
    this.storeService.deleteUser(id);
    this.refresh();
  }
  refresh() {
    this.getAllUsers();
    this.changeDetectorRefs.detectChanges();
  }
}
