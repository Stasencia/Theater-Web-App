import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheatricalEvent } from './theatricalevent';

@Injectable({
  providedIn: 'root'
})
export class TheatricaleventsService {

    private url = "/api/theatricalevents";

    constructor(private http: HttpClient) {
    }

    getTheatricalEvents() {
        return this.http.get(this.url);
    }

    createTheatricalEvent(theatricalEvent: TheatricalEvent) {
        return this.http.post(this.url, theatricalEvent);
    }
    updateTheatricalEvent(theatricalEvent: TheatricalEvent) {

        return this.http.put(this.url + '/' + theatricalEvent.id, theatricalEvent);
    }
    deleteTheatricalEvent(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
