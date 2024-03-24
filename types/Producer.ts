export interface Producer {
    pagination: Pagination
    data: Data[]
}

export interface Pagination {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: Items
}

export interface Items {
    count: number
    total: number
    per_page: number
}

export interface Data {
    mal_id: number
    url: string
    titles: Title[]
    images: Images
    favorites: number
    established?: string
    about?: string
    count: number
}

export interface Title {
    type: string
    title: string
}

export interface Images {
    jpg: Jpg
}

export interface Jpg {
    image_url: string
}
