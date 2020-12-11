import { Injectable } from '@angular/core';
import { InfoInterface } from './info-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  getProducts(): InfoInterface[] {
    return [
      {
        Id: 1,
        title: 'Monitor your progress with charts',
        imageUrl: 'assets/images/charts.svg',
      },
      {
        Id: 2,
        title: 'Earn points for progress',
        imageUrl: 'assets/images/points.svg',
      },
      {
        Id: 3,
        title: 'Unlock Badges',
        imageUrl: 'assets/images/badge.svg',
      },
    ];
  }
}
