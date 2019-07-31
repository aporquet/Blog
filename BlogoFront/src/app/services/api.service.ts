import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Publication from '../models/Publication';
import { PublicationService } from './publication/publication.service';

export class ApiService {

    private url = environment.url;

    constructor(private publicationService: PublicationService) {
    }

    firstCall() {
        return this.publicationService.getPublications();
    }
}