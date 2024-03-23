export interface Staff {
  data: Data[];
}

export interface Data {
  person: Person;
  positions: string[];
}

export interface Person {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

export interface Images {
  jpg: Jpg;
}

export interface Jpg {
  image_url: string;
}
