
import short, { SUUID } from "short-uuid";

export class DescriptionItem {
    id; 
    value = "";
    placeholder = "Enter your work experience description here.";

    constructor() {
        this.id = short.generate() as SUUID; 
    }
}