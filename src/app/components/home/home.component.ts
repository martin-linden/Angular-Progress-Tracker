import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Getting started';
  cardInfo = [];

  constructor(private InfoService: InfoService) {}

  ngOnInit(): void {
    this.cardInfo = this.InfoService.getProducts();
  }
}
