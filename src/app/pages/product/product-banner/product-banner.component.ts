import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.css'],
})
export class ProductBannerComponent implements OnInit {
  items = [
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/58ab2de780340ba2.jpg?q=50',
      alt: 'Los Angeles',
      active: true,
      carouselIndicators: 0,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/1e8c8bad285c8d1c.jpg?q=50',
      alt: 'Chicago',
      active: false,
      carouselIndicators: 1,
    },

    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/e1a2287ab89ea1a9.jpg?q=50',
      alt: 'London',
      active: false,
      carouselIndicators: 2,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/6c8c1539acccbb99.jpg?q=50',
      alt: 'New york',
      active: false,
      carouselIndicators: 3,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/312524dba55d4d65.jpg?q=50',
      alt: 'China',
      active: false,
      carouselIndicators: 4,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
