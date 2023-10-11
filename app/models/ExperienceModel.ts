
import short from "short-uuid";
import { DescriptionItem } from "./DescriptionItem";

export type Props = { 
    duration: string;
    title: string;
    company: string;
    location: string;
    description: DescriptionItem[];
}

export class ExperienceModel {
    id: short.SUUID; 
    duration: string;
    title: string;
    company: string;
    location: string;
    description: DescriptionItem[];

    constructor({duration, title, company, location, description}:Props) {
        this.id = short.generate();
        this.duration = duration;
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
    }
}