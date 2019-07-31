import { Component, OnInit, Input } from '@angular/core';
import Publication from 'src/app/models/Publication';

@Component({
  selector: 'app-publication-row',
  templateUrl: './publication-row.component.html',
  styleUrls: ['./publication-row.component.css']
})

export class PublicationRowComponent implements OnInit {

  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
    console.log(this.publication)
  }

}
