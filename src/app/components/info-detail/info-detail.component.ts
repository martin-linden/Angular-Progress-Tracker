import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoInterface } from 'src/app/info-interface';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css'],
})
export class InfoDetailComponent implements OnInit {
  pageTitle: string = 'Info Detail';
  product: InfoInterface;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      Id: id,
      title: 'hejhopp',
      imageUrl: 'assets/images/points.svg',
    };
  }
}
