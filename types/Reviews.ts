export interface Reviews {
  pagination: Pagination;
  data: Data[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

export interface Data {
  mal_id: number;
  url: string;
  type: string;
  reactions: Reactions;
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: any;
  user: User;
}

export interface Reactions {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
}

export interface User {
  url: string;
  username: string;
  images: Images;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
}

export interface Webp {
  image_url: string;
}
