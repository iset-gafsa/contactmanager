export type ContactType = 'Freind'|'Family'|'Work';

export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  type: ContactType;
  description: string;
  phone: string;

  constructor(firstName:string, lastName: string, email: string, type: ContactType , description: string , phone: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.description = description;
    this.phone = phone;
  }
}
