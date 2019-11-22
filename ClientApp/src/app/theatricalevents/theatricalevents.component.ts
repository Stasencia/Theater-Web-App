import { Component, OnInit } from '@angular/core';
import { TheatricaleventsService } from '../theatricalevents.service';
import { TheatricalEvent } from '../theatricalevent';

@Component({
  selector: 'app-theatricalevents',
  templateUrl: './theatricalevents.component.html',
    styleUrls: ['./theatricalevents.component.css'],
    providers: [TheatricaleventsService]
})
export class TheatricaleventsComponent implements OnInit {

    theatricalevent: TheatricalEvent = new TheatricalEvent();  
    theatricalevents: TheatricalEvent[];         
    tableMode: boolean = true;  

    constructor(private dataService: TheatricaleventsService) { }

    ngOnInit() {
        this.loadTheatricalEvents();  
    }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            if (myReader.result === 'string')
                this.theatricalevent.image = myReader.result;
            else
                this.theatricalevent.image = myReader.result.toString();
        }
        myReader.readAsDataURL(file);
    }

    loadTheatricalEvents() {
        this.dataService.getTheatricalEvents()
            .subscribe((data: TheatricalEvent[]) => this.theatricalevents = data);
    }
    save() {
        if (this.theatricalevent.id == null) {
            this.dataService.createTheatricalEvent(this.theatricalevent)
                .subscribe((data: TheatricalEvent) => this.theatricalevents.push(data));
        } else {
            this.dataService.updateTheatricalEvent(this.theatricalevent)
                .subscribe(data => this.loadTheatricalEvents());
        }
        this.cancel();
    }
    editTheatricalEvent(te: TheatricalEvent) {
        this.theatricalevent = te;
    }
    cancel() {
        this.theatricalevent = new TheatricalEvent();
        this.tableMode = true;
    }
    delete(te: TheatricalEvent) {
        this.dataService.deleteTheatricalEvent(te.id)
            .subscribe(data => this.loadTheatricalEvents());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }

}
