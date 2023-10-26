import short from "short-uuid";

export type Props = {
  firstName: string;
  lastName: string;
  profession: string;
  phone: string;
  email: string;
  location: string;
  website: string;
};

export class ContactModel {
  firstName = "";
  lastName = "";
  profession = "";
  phone = "";
  email = "";
  location = "";
  website = "";
  constructor() {}

  
}
