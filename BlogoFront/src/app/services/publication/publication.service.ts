import { Injectable } from '@angular/core';
import Publication from 'src/app/models/Publication';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  private url = environment.url;
  publications: Publication[] = [];

  constructor(private httpClient: HttpClient) { }

  getPublications() {
    return this.httpClient.get<Publication[]>(this.url + 'publications');
  }

  insertPublication(publication: Publication) {
    return this.httpClient.post<Publication>(this.url + 'publications', publication.PublicationFormatToInsert());
  }

  insertPublicationView(publicationInserted: Publication){
    this.publications.push(publicationInserted);
  }
  
}
