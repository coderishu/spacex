import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardData: any;
  constructor() { }

  ngOnInit() {
  }

  setPlaceholder(e){
    e.target.src = "./assets/images/placeholder.png"
  }

}
