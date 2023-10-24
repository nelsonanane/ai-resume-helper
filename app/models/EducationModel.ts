
import short from "short-uuid";

export type Props = { 
    duration: string;
    degree: string;
    major: string;
    location: string;
    collegeName: string;
}

export class EducationModel {
    id: short.SUUID; 
    duration: string;
    degree: string;
    major: string;
    location: string;
    collegeName: string;

    constructor({duration, degree, major, location, collegeName}:Props) {
        this.id = short.generate();
        this.duration = duration;
        this.degree = degree;
        this.major = major;
        this.location = location;
        this.collegeName = collegeName;
    } 
}