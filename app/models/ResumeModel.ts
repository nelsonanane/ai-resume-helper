import short from "short-uuid";
import { DescriptionItem } from "./DescriptionItem";
import { EducationModel } from "./EducationModel";
import { ContactModel } from "./ContactModel";
import { ExperienceModel } from "./ExperienceModel";

export class ResumeModel {
  contact = new ContactModel();
  summary = "";
  experiences = [new ExperienceModel()];
  skills = [];
  image = "";
  colleges = [new EducationModel()];
  suggestions = {};

  constructor() {}

  updateContact(key:string, value:string) {   
    return { ...this.contact, [key]: value }
  }
}
