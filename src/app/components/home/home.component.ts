import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { InfoService } from 'src/app/info.service';
import { InfoInterface } from 'src/app/info-interface';

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
