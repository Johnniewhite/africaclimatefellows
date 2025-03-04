// Type definitions for Piwigo API responses

export interface PiwigoCategory {
  id: number;
  name: string;
  comment: string;
  date_creation?: string;
  nb_images?: number;
  total_nb_images?: number;
  url?: string;
  tn_url?: string;
}

export interface PiwigoCategoriesResponse {
  stat: string;
  result: {
    categories: PiwigoCategory[];
  };
}

export interface PiwigoCategoryResponse {
  stat: string;
  result: {
    category: PiwigoCategory;
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
    [key: string]: {
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