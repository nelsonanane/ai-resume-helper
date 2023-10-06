
import short from "short-uuid";

export type Props = {  
    name: string;
}

export class EducationModel {
    id: short.SUUID;  
    name: string;

    constructor({name}:Props) {
        this.id = short.generate(); 
        this.name = name;
    }
}