import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-advetisement',
  templateUrl: './product-advetisement.component.html',
  styleUrls: ['./product-advetisement.component.css'],
})
export class ProductAdvetisementComponent implements OnInit {
  items = [
    {
      path:
        'https://rukminim1.flixcart.com/flap/480/480/image/ba5b14de29368606.jpg?q=50',
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/480/480/image/b9521f6e0b5e37d9.jpg?q=50',
    },
    {
      path: 'https://rukminim1.flixcart.com/flap/480/480/image/14d80f.jpg?q=50',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
