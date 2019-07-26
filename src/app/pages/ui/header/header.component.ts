import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/models/app-state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotle:number;

  constructor(public store: Store<IAppState>) { }

  ngOnInit() {
    this.store.select(state => state).subscribe((data: any) => {
      this.cartTotle = data.sales.cart.length;
    });
  }

}
