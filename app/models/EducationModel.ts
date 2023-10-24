import short from "short-uuid";

export type Props = {
  duration: string;
  degree: string;
  major: string;
  location: string;
  collegeName: string;
};

export class EducationModel {
  id = short.generate();
  duration = "";
  degree = "";
  major = "";
  collegeName = "";
  location = "";

  constructor() {}
}
