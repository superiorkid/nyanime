export interface Genre {
  data: Data[];
}

export interface Data {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}
