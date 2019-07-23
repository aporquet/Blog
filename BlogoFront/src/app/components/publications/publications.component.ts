import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Publication from 'src/app/models/Publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(){
    this.apiService.getPublications().subscribe((response: Publication[]) => {
        this.apiService.publications = response;
    });
  }

}
