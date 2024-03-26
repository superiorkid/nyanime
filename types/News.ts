export interface News {
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
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: Images;
  comments: number;
  excerpt: string;
}

export interface Images {
  jpg: Jpg;
}

export interface Jpg {
  image_url: string;
}
