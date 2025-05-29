// Common interfaces used in both request and response
export interface Address {
  composite?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
}

export interface Avatar {
  id: string;
  url: string;
  size: number;
  mimetype: string;
}

export interface Organization {
  _id: string;
  crn: string;
  name: string;
  address: Address;
  ownerId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  avatar: Avatar;
}

// Login Request Type (what you send to the API)
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  timezone?: string; // Optional, if you want to include timezone in the request
}

// Login Response Type (what you receive from the API)
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  postCode: string;
  address: Address;
  cognitoId: string;
  role: string;
  liveStatus: string;
  status: string;
  products: any[]; // Replace 'any' with proper type if you know the product structure
  organization: Organization;
  createdBy: null | string;
  deletedBy: null | string;
  isDeleted: boolean;
  departmentId: null | string;
  permissionsRole: null | string;
  createdAt: string;
  updatedAt: string;
  igStatus: string;
  facebookUrl: string;
  jobTitle: string;
  linkedInUrl: string;
  phoneNumber: string;
  twitterUrl: string;
  timezone: string;
  avatar: Avatar;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: User;
  activityLogOff: boolean;
}

export interface LoginResponse {
  statusCode: number;
  message: string;
  data: LoginResponseData;
  error: null | {
    message: string;
    // Add other error properties if they exist
  };
}