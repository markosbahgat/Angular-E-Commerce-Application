import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/core/models/products.interface';

@Component({
  selector: 'commerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {}
}
