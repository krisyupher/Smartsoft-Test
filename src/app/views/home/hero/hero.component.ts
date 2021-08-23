import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../core/services/store/store.service';
import { UserInterface } from '../../../core/models/userInterface.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  dataUsers: UserInterface[];
  constructor(private storeService: StoreService) {
    this.dataUsers = [];
  }

  ngOnInit(): void {
    this.dataUsers = this.storeService.getAllUsers();
  }
}
