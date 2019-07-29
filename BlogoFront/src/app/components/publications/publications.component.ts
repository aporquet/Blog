import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Publication from 'src/app/models/Publication';
import { PublicationService } from 'src/app/services/publication/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(){
    this.publicationService.getPublications().subscribe((response: Publication[]) => {
        this.publicationService.publications = response;
    });
  }

}
