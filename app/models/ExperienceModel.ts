
import short from "short-uuid";

export type Props = { 
    duration: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

export class ExperienceModel {
    id: short.SUUID; 
    duration: string;
    title: string;
    company: string;
    location: string;
    description: string;

    constructor({duration, title, company, location, description}:Props) {
        this.id = short.generate();
        this.duration = duration;
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
    }
}