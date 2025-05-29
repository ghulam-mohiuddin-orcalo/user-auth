export interface ILogo {
  id: string;
  url: string;
  size: number;
  mimetype: string;
}

export interface IFaqCategory {
  _id: string;
  name: string;
  description: string;
  status?: string;
  logo: ILogo;
  createdBy: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
  isChild: boolean;
}

export interface ICreatedBy {
  _id: string;
  name: string;
}

export interface IPost {
  _id: string;
  faqQuestion: string;
  faqCategory: IFaqCategory;
  faqAnswer: string;
  createdBy: ICreatedBy;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface IMeta {
  page: number;
  pages: number;
  limit: number;
  total: number;
}

export interface IApiResponse {
  statusCode: number;
  message: string;
  data: {
    faqs: IPost[];
    meta: IMeta;
  };
  error: null | any;
}

export interface IQueryParams {
  // Define your query parameters here based on what you expect to pass
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  // ... any other query parameters
}