import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Publication from '../models/Publication';

export class ApiService {

    private url = environment.url;

    publications: Publication[] = [];

    constructor(private httpClient: HttpClient) {
    }

    getPublications() {
        return this.httpClient.get<Publication[]>(this.url + 'publications');
    }
}