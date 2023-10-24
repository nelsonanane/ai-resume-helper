import short from "short-uuid";
import { DescriptionItem } from "./DescriptionItem";

export type Props = {
  duration: string;
  title: string;
  company: string;
  location: string;
  description: DescriptionItem[];
};

export class ExperienceModel {
  id = short.generate();
  duration = "";
  title = "";
  company = "";
  location = "";
  description = [
    new DescriptionItem(),
    new DescriptionItem(),
    new DescriptionItem(),
    new DescriptionItem(),
  ];

  constructor() {}
}
