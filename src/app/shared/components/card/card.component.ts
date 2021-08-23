import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../core/models/userInterface.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: UserInterface | undefined;
  constructor() {}

  ngOnInit(): void {}
}
