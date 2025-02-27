export interface PiwigoCategory {
  id: number;
  name: string;
  comment: string;
  permalink: string | null;
  status: string;
  uppercats: string;
  global_rank: string;
  id_uppercat: number | null;
  nb_images: number;
  total_nb_images: number;
  representative_picture_id: string;
  date_last: string;
  max_date_last: string;
  nb_categories: number;
  image_order: string;
  url: string;
  tn_url: string;
}

export interface PiwigoCategoriesResponse {
  stat: string;
  result: {
    categories: PiwigoCategory[];
  };
}

export interface PiwigoImage {
  id: number;
  width: number;
  height: number;
  hit: number;
  file: string;
  name: string;
  comment: string;
  date_creation: string;
  date_available: string;
  page_url: string;
  element_url: string;
  derivatives: {
    [size: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface PiwigoImagesResponse {
  stat: string;
  result: {
    paging: {
      page: number;
      per_page: number;
      count: number;
      total_count: number;
    };
    images: PiwigoImage[];
  };
} 