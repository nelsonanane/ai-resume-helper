
import short from "short-uuid";

export type Props = {  
    value: string;
    placeholder: string;
}

export class DescriptionItem {
    id: short.SUUID; 
    value: string; 
    placeholder: string;

    constructor({value, placeholder}:Props) {
        this.id = short.generate(); 
        this.value = value;
        this.placeholder = placeholder
    }
}