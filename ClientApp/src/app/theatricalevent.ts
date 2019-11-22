import { Time } from "@angular/common";

export class TheatricalEvent {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public duration?: Time,
        public image?: string) { }
}
