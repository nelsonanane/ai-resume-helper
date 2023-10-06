
import short from "short-uuid";

export type Props = { 
    duration: string;
    degree: string;
    major: string;
    location: string;
    name: string;
}

export class EducationModel {
    id: short.SUUID; 
    duration: string;
    degree: string;
    major: string;
    location: string;
    name: string;

    constructor({duration, degree, major, location, name}:Props) {
        this.id = short.generate();
        this.duration = duration;
        this.degree = degree;
        this.major = major;
        this.location = location;
        this.name = name;
    }
}