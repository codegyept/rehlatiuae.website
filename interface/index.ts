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
  id: number;
  name: string;
  description: string;
  imagePath: string;
  country: string;
}

export interface TopDestination {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  country: string;
}
export interface Blog {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  created_at: string;
  reviewAverage: number;
  blogReview: [];
  trip: {
    id: number;
    name: string;
    address: string;
    description: string;
    oldPrice: number;
    childPrice: number;
    beforePrice: string;
    saving: string;
    imagePath: string;
    addresses: {
      id: number;
      name: string;
      description: string;
    }[];

    isFavourite: boolean;
    offers: {
      id: number;
      name: string;
      description: string;
      oldPrice: number;
      childPrice: number;
      beforePrice: string;
      saving: string;
      created_at: string;
      imagePath: string;
      addresses: {
        id: number;
        name: string;
        description: string;
      }[];

      images: {
        id: number;
        imagePath: string;
      }[];
    }[];

    created_at: string;
    reviewAverage: number;
    reviews: any[];
    review_count: {
      one_star: number;
      tow_star: number;
      three_star: number;
      four_star: number;
      five_star: number;
    };
  };
  addresses: {
    id: number;
    name: string;
    description: string;
  }[];
  attachments: {
    id: number;
    blog_id: number;
    images: {
      id: number;
      imagePath: string;
    }[];

    videos: any[];
    documents: any[];
  }[];
  review_count: {
    one_star: number;
    tow_star: number;
    three_star: number;
    four_star: number;
    five_star: number;
  };
}
