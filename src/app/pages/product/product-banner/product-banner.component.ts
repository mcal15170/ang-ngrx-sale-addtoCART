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
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/1e8c8bad285c8d1c.jpg?q=50',
      alt: 'Chicago',
      active: false,
    },

    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/fae350ddc56ee425.jpg?q=50',
      alt: 'London',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/9755c1733f78385f.jpg?q=50',
      alt: 'New york',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/c85581b9f5c5c5e8.jpg?q=50',
      alt: 'China',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/1688/280/image/36e1e69eaa0a3b04.jpg?q=50',
      alt: 'india',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
