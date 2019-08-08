import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css'],
})
export class GridCellComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() imageurl: string;
  altText: string;

  constructor() {}

  ngOnInit() {
    this.altText = `image: title: ${this.title} description: ${this.description}`;
  }
}
