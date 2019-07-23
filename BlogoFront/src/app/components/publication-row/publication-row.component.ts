import { Component, OnInit, Input } from '@angular/core';
import Publication from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-publication-row',
  templateUrl: './publication-row.component.html',
  styleUrls: ['./publication-row.component.css']
})
export class PublicationRowComponent implements OnInit {

  @Input() publication: Publication;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
  }

}
