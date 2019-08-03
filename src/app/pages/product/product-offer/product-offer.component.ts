import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.css'],
})
export class ProductOfferComponent implements OnInit {
  slides: any = [[]];
  itemsOffer$ = [
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/4e700f3de47eb706.jpg?q=50',
      alt: 'Hand Tools',
      active: true,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/a3e5119bcbf1b84d.jpg?q=50',
      alt: 'LED tvs',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/86284e46f6ca4cec.jpg?q=50',
      alt: 'Beadsroom fruniture',
      active: false,
    },

    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/f54650ca4f7abf94.jpg?q=50',
      alt: 'Core I3',
      active: false,
    },

    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/9777a2e40121f303.jpg?q=50',
      alt: 'Mens Clothing',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/4951d62d797b7c14.jpg?q=50',
      alt: 'Sport Essentials',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/e78c27c193fcbb9c.jpg?q=50',
      alt: 'Home Decor',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/2fc550b5aa9a304d.jpg?q=50',
      alt: 'Furniture Top Deals',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/e59b7bd976820a89.jpg?q=50',
      alt: 'Water Purifiers',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/42d070ce8ab83b44.jpg?q=50',
      alt: 'Mens Footwears',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/21424248cee31c89.jpg?q=50',
      alt: 'Mens Shoes',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/d38a7600d78b289c.jpg?q=50',
      alt: 'Smart TVS',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/102d9f2dda530b54.jpg?q=50',
      alt: 'Umbrellas',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/48c9b26df660aa53.jpg?q=50',
      alt: 'Most Loved Furniture',
      active: false,
    },
    {
      path:
        'https://rukminim1.flixcart.com/flap/960/960/image/04360175def7ee44.jpg?q=50',
      alt: 'Speakers',
      active: false,
    },
  ];
  productPerSection: number = 3;
  boostrapDiv: number = 12 / this.productPerSection;
  constructor() {}

  ngOnInit() {
    if (this.itemsOffer$.length > 0) {
      this.slides = this.chunk(this.itemsOffer$, this.productPerSection);
      console.log(this.slides, 'hhhhhhhhhhhhhhhhh');
    }
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
