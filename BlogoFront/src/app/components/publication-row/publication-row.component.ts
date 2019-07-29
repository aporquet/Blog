import { Component, OnInit, Input } from '@angular/core';
import Publication from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { PublicationService } from 'src/app/services/publication/publication.service';

@Component({
  selector: 'app-publication-row',
  templateUrl: './publication-row.component.html',
  styleUrls: ['./publication-row.component.css']
})

export class PublicationRowComponent implements OnInit {

  @Input() publication: Publication;

  // constructor(private formBuilder: FormBuilder, private publicationService: PublicationService) { }

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
  }

}
