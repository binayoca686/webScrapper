import { Result } from "postcss";

export type SearchParams = {
  pages?: String;
  sortBy: String;
  minPrice?: String;
  maxPrice?: String;
};

type PageResult = {
  content: Content;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  content: Content;
  parser_type: string;
};

type Content = {
  url: string;
  page: number;
  results: Results;
  last_visible_page: number;
  parse_status_code: number;
};

type Results = {
  paid: any[];
  filters: Filter[];
  organic: Organic[];
  search_information: {
    query: string;
    showing_results_for: number;
  };
};

type Filter = {
  name: string;
  values: Value[];
};

type Value = {
  url: string;
  value: string;
};

type Organic = {
  pos: number;
  url: string;
  type: string;
  price: number;
  title: string;
  currency: string;
  merchant: {
    url: string;
    name: string;
  };
  price_str: string;
  pos_overall: number;
};

/* ==========sa product========== */

type ProductData = {
  content: ProductContent;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
};

type ProductContent = {
  url: string;
  title: string;
  description: string;
  images: {
    full_size: string[];
    thumbnail: string[];
  };
  highlights?: string[];
  reviews: {
    rating: number;
    top_review: {
      text: string;
      title: string;
      rating: number;
      author: string;
      source: string;
    };
    rating_stars: number;
    reviews_count: number;
    reviews_by_stars: {
      [starRating]: {
        url: string;
        reviews_count: number;
      };
    };
  };
  pricing: {
    online: [
      {
        price: number;
        seller: string;
        details: string;
        currency: string;
        condition: string;
        price_tax: number;
        price_total: number;
        seller_link: string;
        price_shopping: number;
      }
    ];
  };
  specifications: [
    {
      items: [
        {
          title: string;
          value: string;
        }
      ];
      section_title: string;
    }
  ];
};

/* Amazon part */

type PageResultA = {
  content: ContentA;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
};

type ContentA = {
  url: string;
  page: number;
  pages: number;
  query: string;
  results: ResultsA;
};
type ResultsA = {
  paid: any[];
  organic: OrganicA[];
};

type OrganicA = {
  pos: number;
  url: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  currency: string;
  url_image: string;
  reviews_count: number;
  manufacturer: string;
};
