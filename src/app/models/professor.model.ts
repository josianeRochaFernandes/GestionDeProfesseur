export class Person{
  name?: string;
  firstname?: string;
  city? : string;
  sexe?: string;
  contact?: string;
  image? : string;


  constructor(name: string, firstname: string, city: string, sexe: string, contact: string, image: string) {
    this.name = name;
    this.firstname = firstname;
    this.city = city;
    this.sexe = sexe;
    this.contact = contact;
    this.image = image;
  }
}

export class Professor extends Person{
  id?:string;
  description?: string;
  price?: number;
  typeStudy?: string;
  subjects: Array<string>;

  constructor(id: string, name: string, firstname: string, city: string, sexe: string, contact: string, image: string, description: string, price: number, typeStudy: string, subjects: Array<string>) {
    super(name, firstname, city, sexe, contact, image);
    this.id=id;
    this.description = description;
    this.price = price;
    this.typeStudy = typeStudy;
    this.subjects = subjects;
  }
}
