import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalmoney;
  constructor(private cartsservice: CartsService) {
    this.cartsservice.totalCharge();
    this.totalmoney = this.cartsservice.totalmoney;
  }

  get list() {
    console.log(this.cartsservice.followingProjectlist);
    return this.cartsservice.followingProjectlist;
  }

  ngOnInit() {
    scroll(0, 0);
  }
  buttomClickMinus(index) {
    this.cartsservice.buttomClickMinus(index);
    this.totalmoney = this.cartsservice.totalmoney;
  }

  buttomClickPlus(index) {
    this.cartsservice.buttomClickPlus(index);
    this.totalmoney = this.cartsservice.totalmoney;
  }
}
