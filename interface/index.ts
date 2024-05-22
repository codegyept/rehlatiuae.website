type Offer = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  oldPrice: number | string;
  childPrice: number | string;
  beforePrice: number | string;
  saving: number | string;
  addresses: {
    id: number;
    name: string;
    description: string;
  }[];
  images: {
    id: number;
    imagePath: string;
  }[];
};

export interface BestOffersTrip {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  oldPrice: number | string;
  childPrice: number | string;
  beforePrice: number | string;
  saving: number | string;
  addresses: {
    id: number;
    name: string;
    description: string;
  }[];
  images: {
    id: number;
    imagePath: string;
  }[];
  isFavourite: boolean;
  offers: Offer;
  reviewAverage: number;
  reviews: [];
  review_count: {
    one_star: number;
    tow_star: number;
    three_star: number;
    four_star: number;
    five_star: number;
  };
}
export interface BestTrip {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  oldPrice: number | string;
  childPrice: number | string;
  beforePrice: number | string;
  saving: number | string;
  addresses: {
    id: number;
    name: string;
    description: string;
  }[];
  images: {
    id: number;
    imagePath: string;
  }[];
  isFavourite: boolean;
  offers: Offer;
  reviewAverage: number;
  reviews: [];
  review_count: {
    one_star: number;
    tow_star: number;
    three_star: number;
    four_star: number;
    five_star: number;
  };
}
export interface PopularExperience {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  oldPrice: number | string;
  childPrice: number | string;
  beforePrice: number | string;
  saving: number | string;
  addresses: {
    id: number;
    name: string;
    description: string;
  }[];
  images: {
    id: number;
    imagePath: string;
  }[];
  isFavourite: boolean;
  offers: Offer;
  reviewAverage: number;
  reviews: [];
  review_count: {
    one_star: number;
    tow_star: number;
    three_star: number;
    four_star: number;
    five_star: number;
  };
}

export interface Category {
  name: string;
  imagePath: string;
  description: string;
}
